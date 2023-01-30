# ethereum recover from keystore file

This repository provides a solution for recovering an Ethereum private key from a keystore file.

## Usage

### 1 . Clone the repository by running the following command: git clone

```
git clone
```

### 2 . Change the variables in the src/run.js script:

- Replace "keystore path" with the actual path to your keystore file.
- Replace "password" with the password you used when creating the keystore file.

```
const fs = require("fs");
const keythereum = require("keythereum");

const KEYSTORE = "keystore path"; // 1 . this place
const PASSWORD = "password"; // 2 . this place

const keyObject = JSON.parse(fs.readFileSync(KEYSTORE), { encoding: "utf8" });
const privateKey = keythereum.recover(PASSWORD, keyObject).toString("hex");

console.log(`0x${keyObject.address}: 0x${privateKey}`);

```

### 3 . Run the script

Install dependencies by running npm i

```
npm i
```

Run the script by either using 'node src/run.js' or 'npm run start'

```

node src/run.js

or

npm run start
```

### Source from

This solution is based on information from the following post: [Recovering Private Key from Keystore File](https://ethereum.stackexchange.com/questions/91910/recovering-private-key-from-keystore-file)
