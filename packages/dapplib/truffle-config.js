require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile purpose inner nature swift stereo'; 
let testAccounts = [
"0xcecdb66f3b0e452cb64aee263f8c1bf180ce5c3506de5b022a0fb43ec88a2f0e",
"0xbc446150048f6e33d487fafdb7b5d061897570a6d6fa5107260de41fea1b13fd",
"0x832bb7937180e4d3dfdd959680cffef7ebc1dc3b23a0399b1c15b536f73004eb",
"0x357155d635700cf3ecfa0d0e6d686e454de600c2b23ebde128f11e782e5297c1",
"0x03ad88fd2913ac13a969eb9b2388b86f84a0e125125d2a5607707841f8389218",
"0xeef054f1f2f6867b060e6ac0fd2ed67a0672867249db1b6793ae6c1044dc6bd9",
"0xec9eefdb22776a41e047e1d9a55f363c0fffead0d77bdda2a4f6911c7be5822c",
"0x1bc8000f1f5c5670a697f92417167b70ae5ebafd0d859bd95857b87ba936cc0e",
"0x005985ddc9a5d9608c0ed235acf7eb9c168af343e1c6f20cc605a873d3be74cd",
"0xdc4327fbec3544cb3d541c6242e21b57cc0ae2e9223843422c16185b9abee930"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
