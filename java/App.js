/* LICENSE: Boost Software License 1.0
written by Jeff Gold, .

Googli.ee Notary Javascript.
The purpose of this script is to add users to a file, take the hash from 
uploaded files to ipfs. then associate files with users. once assigned each
user must verify the document. Once all signers and witnesses have approved.
All files will then be added to an html script converted into a url and delivered
the user through a weblink and qr code. with option to mint the site to an NFT.
********/

import {
        Person,
        UploadedDocs
} from './classes.js';
import constants from './constants.js';
import queryFile from './queryFile.js';
import unlockProtocol from './unlockProtocol';
import {
        getKeyMetadata,
        unlock-js
 } from './unlock/unlock.js';
import bitty from './bitty.js';
import miniUrl from './miniUrl.js';
import mintNFT from './mintNFT.js';

import unlock from '@unlock-protocol/unlock.js';

/* Step 1
        -optional user logging
        -update Person class
*/
function getKeyMetadata() {

}




/* Step 2
        - user[0] uploads files, and adds other userId's involved in the file.
        - update UploadedDocs class for each document
        - user[0] signs document
        - sends to user[1] for approval
*/




/* Step 3
        - sends notification to user[1]  account
        - user[1] verifies the files and signs
        - signature sent to user[0] to verify user[1] signature
        - if more users send to next and return to all signed to verify
*/

/* Step 4
        - All Person(s) involved verify all signatures.
        - All UploadedDocs arranged on a single page html
        - Send html code to bitty
        - Send bitty URL to urlShrinker
        - (optional) create NFT send to all users walletAddress
*/


/* Step 5
        - if options are added send reward to user[0] by default
        - options to split reward to all users
        - rewards are paid in native token
*/
