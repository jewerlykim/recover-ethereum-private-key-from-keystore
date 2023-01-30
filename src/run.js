const fs = require("fs");
const keythereum = require("keythereum");

const KEYSTORE = "keystore path";
const PASSWORD = "password";

const keyObject = JSON.parse(fs.readFileSync(KEYSTORE), { encoding: "utf8" });
const privateKey = keythereum.recover(PASSWORD, keyObject).toString("hex");

console.log(`0x${keyObject.address}: 0x${privateKey}`);
