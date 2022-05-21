require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net property grace clog swear security'; 
let testAccounts = [
"0x2efba110264f82b3f44e6089cde121cee14f4a4249fc81bdfc16323396e8bbcc",
"0xfaae6a8459dee7d6f684be741ad90b9b4e057206fd2044fd6529efd4b2127545",
"0x154d764c8a30a1b45ca12bddc2c4b8297277bd40ba5dcb25525ff2378aedb0a2",
"0x47b10a097458b1afe158dc4cf10cd49ccd0589497dbf2b74eb10e742a175e789",
"0x01b0cf5ba1ee53ac7502c0032af18a0d1a5d2c1686342cdeb24cda1b7f793695",
"0x2beacfd9f3941ea1ccffc894a1a6eb7f46ed6011f1bf93e2cd16d5cb180197a8",
"0xc9ad9530263b8aaa9f573f0029176608916bae6a0755a36302b5e311466784ec",
"0xb5cd71a75692ddd16edd5cd94267c0aac64edce14044826bbc64c66f4fbba741",
"0x23b0bf495dea89ecdc73a7495902392ee32a385716f3d1e4c886745145412c60",
"0x06b3d65dd59b758856a83180e3432e470f4b28edef4e0c4fdd4f8d678901c6b9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

