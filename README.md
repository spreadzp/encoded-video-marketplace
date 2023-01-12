# The marketplace of Encoded NFTs 
To test it run in browser
```
https://video-marketplace-spread.vercel.app
```

## Inspiration 
They use of NFTs helped owners establish ownership of content with a unique ID, but as soon as the content itself becomes popular, it is massively copied and NFTs are released with modified clones of the original content. Therefore, this project aims to protect content from such a phenomenon.Now only the NFT owner not only owns the attached content, but only the owner can view it! Content protection, implemented using a mixture of symmetric and asymmetric encryption
## The project is built on the basis of Nest.js, 2 smart contracts are used for issuing NFTs and for selling at auction
## Principle of operation of the marketplace of Encoded NFTs

1) During the time of creating the NFT, the user selects using the UI content (image for poster, video) that will be the value for which buyers are willing to pay
2) After fill the metadata of NFT  
and image as poster of video we can select the video for the NFT
2) After selecting the content under the hood, a key pair is generated from farther PrivateKeyContent and PublicKeyContent
which will be used for symmetric encryption and decryption of content
3) PrivateKeyContent is encrypted using the asymmetric encryption method from the Metamask using the public key of the user account and a hash of the encrypted private key is obtained, this hash can only be decrypted using the private key of the user account by calling the decrypt method from the Metamask
5) using PublicKeyContent, the content data is encrypted
6) The user enters the name and description of the content and the desired sale price of the NFT
7) the description and name of the encrypted content is uploaded to IPFS and 1 CID is obtained, using the link in IPFS everyone can see the hash of the encrypted content, but decrypt it only using the PrivateKeyContent
8) Now, during the NFT mint operation, a link to the CID and the encrypted PrivateKeyContent as hash is mint and the NFT is issued, after which the new token is listed
9) Only the owner can view the encrypted NFT content by clicking on the decrypt content button, while the following chain of actions occurs: the hash of the PrivateKeyContent is decrypted by calling the decrypt method from the Metamask, after which the content from IPFS is already decrypted using pure PrivateKeyContent
10) Any user can go to the marketplace page, select any token and go to the rates page
for this token
11) on this page, the user enters his rate, which will be withdrawn from his wallet, he can add a wish to the seller or other buyers and provide the public key of his account by calling from the Metamask
12) After confirming the bet, the specified amount is transferred from the wallet, the user can add his bet by repeating the same steps and the bet will be increased by the added amount, the user can remove the bet and the bet will be removed from the betting board
13) The NFT owner enters the betting board and can accept any bet regardless of the price, that's why it is so important for the buyer to write a beautiful opus to his bet or a secret word :)
14) During acceptance, the following chain of events occurs
14.1 the owner, by calling the decrypt method from the Metamask, decrypts the hash into a PrivateKeyContent
14.2 by calling the encrypt method uses the buyer's public key to encrypt the PrivateKeyContent, a new hash is generated
14.3 NFT is transferred to the new owner now the hash of the PrivateKeyContent can only be decrypted by the private key of the new owner's account, using PrivateKeyContent the new owner can decrypt encrypted content of the NFT
15) The new owner can  sell the token as described in steps 9-14, while the rates of other buyers are preserved and, if desired, the new owner can accept any of the list as described in paragraph 13
16) The withdrawal of the amount received from the sale of a specific token to the seller's account is provided
17) Provides for the withdrawal of the buyer's funds if the rate is removed


 
## Setup

### Using the env File

You will need at least one mnemonic to use with the network. The `.dotenv` npm package has been installed for you, and you will need to create a `.env` file for storing your mnemonic and any other needed private information.

The `.env` file is ignored by git in this project, to help protect your private data. In general, it is good security practice to avoid committing information about your private keys to github. The `truffle-config.ovm.js` file expects a `GANACHE_MNEMONIC` and a `GOERLI_MNEMONIC` value to exist in `.env` for running commands on each of these networks, as well as a default `MNEMONIC` for the optimistic network we will run locally.

If you are unfamiliar with using `.env` for managing your mnemonics and other keys, the basic steps for doing so are below:

1) Use `touch .env` in the command line to create a `.env` file at the root of your project.
2) Open the `.env` file in your preferred IDE
3) Add the following, filling in your own Infura project key and mnemonics:

```
MNEMONIC="candy maple cake sugar pudding cream honey rich smooth crumble sweet treat"
INFURA_KEY="<Your Infura Project ID>"
GANACHE_MNEMONIC="<Your Ganache Mnemonic>"
GOERLI_MNEMONIC="<Your Goerli Mnemonic>"
```

_Note: the value for the `MNEMONIC` above is the one you should use, as it is expected within the local optimistic ethereum network we will run in this Truffle Box._

4) As you develop your project, you can put any other sensitive information in this file. You can access it from other files with `require('dotenv').config()` and refer to the variable you need with `process.env['<YOUR_VARIABLE>']`.

### New Configuration File 

Please note, the classic `truffle-config.js` configuration file is included here as well, because you will eventually want to deploy contracts to Ethereum as well. All normal truffle commands (`truffle compile`, `truffle migrate`, etc.) will use this config file and save built files to `build/ethereum-contracts`. You can save Solidity contracts that you wish to deploy to Ethereum in the `contracts/ethereum` folder.
 
### Migrating

To migrate run:

```
npm run migrate:evm-d 
```

  Save your seed phrase in a `.env` file as `GOERLI_MNEMONIC`. Using an `.env` file for the mnemonic is safer practice because it is listed in `.gitignore` and thus will not be committed.
   In order to get Optimistic Goerli ETH, follow these steps:
    1) Acquire ETH for your Goerli wallet on MetaMask using a [Goerli faucet](https://faucet.paradigm.xyz/). 

Layer 1 networks are included in the `truffle-config.js` file, but it is not necessary to deploy your base contracts to Layer 1 right now.   
## Basic Commands
  

### Testing

 

### Running Scripts 
```
npm run exec:ovm script --network=(ganache | optimistic_ethereum | optimistic_goerli | dashboard)
```
 