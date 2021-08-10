/* LICENSE: Boost Software License 1.0
written by Jeff Gold

Googli.ee Notary Javascript.
The purpose of this script is to add users to a file, take the hash from 
uploaded files to ipfs. then associate files with users. once assigned each
user must verify the document. Once all signers and witnesses have approved.
All files will then be added to an html script converted into a url and delivered
the user through a weblink and qr code. with option to mint the site to an NFT.
********
Classes setting up metadata for each object.
-Person = listing for each user on the system, verification level, role on the document...
-UploadedDocs = Files uploaded by user */

class Person {
    constructor(
        userId,
        firstName,
        lastName,
        dob,
        walletAddress,
        unlockProtocolNFT,
        idCheck,
        signer,
        signedHash,
        witness,
        witnessHash,
        approveFileHash,
        docRole,
        verificationLevel,
        userNonce,
        ) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.walletAddress = walletAddress;
        this.unlockProtocolNFT =unlockProtocolNFT;
        this.idCheck = idCheck;
        this.uploadedFile = uploadedFile;
        this.signer = signer;
        this.signedHash = signedHash;
        this.witness = witness;
        this.witnessHash = witnessHash;
        this.approveFileHash = approveFileHash;
        this.docRole = docRole,
        this.verificationLevel = verificationLevel;
        this.userNonce = userNonce;
    }
}

class UploadedDocs {
    constructor (
        originalFileName,
        ipfsHash,
        ipfsLink,
        fCoinAddress,
        fCoinBackup,
        uploadedBy,
        signers,
        witnesses,
        encryptedDoc,
    ) {
        this.originalFileName = originalFileName;
        this.ipfsHash = ipfsHash;
        this.ipfsLink = ipfsLink;
        this.fCoinAddress = fCoinAddress;
        this.fCoinBackup = fCoinBackup;
        this.uploadedBy = uploadedBy;
        this.signers = signers;
        this.witnesses = witnesses;
        this.encryptedDoc = encryptedDoc;  
    } 
}

