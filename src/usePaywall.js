import { useEffect, useState } from 'react'
import configure from '../config'

const config = configure()

export const usePaywall = (lockAddresses) => {
  const [lockState, setLockState] = useState('loading')

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)

    if (lockAddresses.length) {
      // Each lock migth start with the network name!
      // Add the Unlock config!
      const unlockConfig = {
        network: 1, // Deprecated
        icon:
          urlParams.get('icon') ||
          'https://app.unlock-protocol.com/static/images/svg/default.svg',
        callToAction: {
          default: 'This content is locked. sign up to access it!',
          expired: 'This key is now expired. Please renew of sign up for a new key.',
          pending: 'Thank you. The transaction for your key has not be confirmed yet. It should be completed shortly.',
          confirmed: 'Thank you. Your key is confirmed. ',
          noWallet: 'In order to use the Unlock Protocol and earn GGL rewards you need to get a blockchain wallet. Any ERC20/ERC1155 compatible will work.',
        },
      }
      unlockConfig.locks = lockAddresses.reduce((locks, lockAddress) => {
        const [network, address] = lockAddress.split('0x')
        // eslint-disable-next-line no-param-reassign
        locks[`0x${address}`] = {
          network: network ? parseInt(network, 10) : 1,
        }
        return locks
      }, {})

      unlockConfig.metadataInputs = [
        {
          name: 'Email Address',
          type: 'email',
          required: true,
          userId: '<gglID>',
          firstName: '<firstName>',
          lastName: '<lastName>',
          dob: '<dob>',
          walletAddress: '<walletAddress>',
          idCheck: '<boolean>',
          signer: '<boolean>',
          signedHash: '<signedHash>',
          witness: '<boolean>',
          witnessHash: '<witnessHash>',
          finalHash: '<finalHash>',
          docRole: '<owner/singer/witness/all>',
          verificationLevel: '<numberOfCompletedKycNumber>',
          userNonce: '<nonce>',
          required: false,
        },
      ]
      window.unlockProtocolConfig = unlockConfig

      // And then the Unlock script
      const script = window.document.createElement('script')
      const scriptContent = window.document.createTextNode(`(function(d, s) {
var js = d.createElement(s),
sc = d.getElementsByTagName(s)[0];
js.src="${config.paywallUrl}/static/unlock.latest.min.js";
sc.parentNode.insertBefore(js, sc); }(document, "script"));`)
      script.appendChild(scriptContent)
      window.document.body.appendChild(script)

      // Set the lock state, based on the event
      const handler = (event) => {
        setLockState(event.detail)
      }
      window.addEventListener('unlockProtocol', handler)

      // Cleanup
      return () => {
        window.removeEventListener('unlockProtocol', handler)
        window.document.body.removeChild(script)
        delete window.unlockProtocolConfig
      }
    }
    // No-op when there are no lock addresses
    return () => {}
  }, [JSON.stringify(lockAddresses)])

  return [lockState]
}

export default usePaywall
