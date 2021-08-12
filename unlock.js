window.addEventListener('unlockProtocol.status', function (event) {
    // We hide all .unlock-content elements
    document.querySelector('.unlock-content').style.display = "none"
    // We show only the relevant element
    document.querySelectorAll(`.unlock-content.${event.detail.state}`).forEach((element) => {
        element.style.display = "block"
    })
})

window.addEventListener('unlockProtocol.authenticated', function (event) {
    // event.detail.addresss includes the address of the current user, when known
})

window.addEventListener('unlockProtocol.transactionSent', function (event) {
    // event.detail.hash includes the hash of the transaction sent
})

import { WalletService } from '@unlock-protocol/unlock-js';

// ... initialize WalletService ...

const getOptions = {
    lockAddress: 'your lock address here',
    keyId: 'your key id here',
    locksmithHost: 'the URL of an instance of locksmith',
    getProtectedData: true, // false to get only public data
};

// Get all metadata associated with a given key
// (key-specific, and user-specific of current key holder)
walletService.getKeyMetadata(getOptions, (error, json) => {
    if (json) {
        console.log(json);
    } else {
        console.log(error);
    }
});

const setKeyOptions = {
    lockAddress: '0xb420D5671a44b8508FD2C9EE95245D5FC75Ccba2',
    keyId: 'Googli.eth',
    locksmithHost: './index.html',
    metadata: {
        //    fieldName: 'the string value to store',
        [
            {
                name: 'Email Address',
                type: 'email',
                required: true,
            },
            {
                name: 'First name',
                type: 'text',
                required: false,
                public: true,
            },
            {
                name: 'Last name',
                type: 'text',
                required: false,
            },
            {
                name: 'Date of Birth',
                type: 'date',
                required: false,
            },
            {
                name: 'Wallet Address',
                type: 'address',
                required: false,
            },
            {
                name: 'Date of Birth',
                type: 'date',
                required: false,
            },
            {
                name: 'ID verification',
                type: 'boolean',
                required: false,
            },
            {
                name: 'KYC Verification Level',
                type: 'rating',
                required: false,
            },
            {
                name: 'User Nonce',
                type: 'nonce',
                required: true,
            },
        ],
    },

    // Set key-specific metadata (e.g., ticket has been checked in)
    walletService.setKeyMetadata(setKeyOptions, (error, succeeded) => {
        if (succeeded) {
            console.log('set the metadata!');
        } else {
            console.log(error);
        }
    }),

    const setUserOptions = {
        lockAddress: 'your lock address here',
        userAddress: 'address of user wallet',
        locksmithHost: 'the URL of an instance of locksmith',
        metadata: {
            publicData: {
                [
                    {
                        name: 'Email Address',
                        type: 'email',
                        required: true,
                    },
                    {
                        name: 'First name',
                        type: 'text',
                        required: false,
                        public: true,
                    }
                ],
            },
            protectedData: {
                [
                    {
                        name: 'Last name',
                        type: 'text',
                        required: false,
                    },
                    {
                        name: 'Date of Birth',
                        type: 'date',
                        required: false,
                    },
                    {
                        name: 'Wallet Address',
                        type: 'address',
                        required: false,
                    },
                    {
                        name: 'Date of Birth',
                        type: 'date',
                        required: false,
                    },
                    {
                        name: 'ID verification',
                        type: 'boolean',
                        required: false,
                    },

                ],

            },
        },
    },

    // set user-specific metadata (e.g., email address, name)
    walletService.setUserMetadata(setUserOptions, (error, succeeded) => {
        if (succeeded) {
            console.log('Please fill in the form completely to continue with KYC verification.');
        } else {
            console.log(error);
        }
    }),
},