/* eslint-disable no-inline-comments */
import { map, set } from 'lodash';

/**
 * Export available rpc methods.
 */

 /**
 * @Dev
 * follow the versioning rule below 
 * to update changes:
 * *new : '>= new_version'
 * *changed: '>= new_version'
 * *deprecate: '< new_version'
 */

export default {
    aliasAddScript: { version: '>=2.2.0' },
    aliasFilter: { version: '>=2.2.0' },
    aliasHistory: { version: '>=2.2.0' },
    aliasTxHistory: { version: '>=2.2.0' },
    aliasUpdateWhitelist: { version: '>=2.2.0' },
    aliasClearWhitelist: { version: '>=2.2.0' },
    aliasWhitelist: { version: '>=2.2.0' },
    aliasBalance: { version: '>=2.2.0' },
    aliasInfo: { version: '>=2.2.0' },
    aliasNew: { version: '>=2.2.0' },
    aliasPay: { version: '>=2.2.0' },
    aliasUpdate: { version: '>=2.2.0' },
    addMultiSigAddress: { version: '>=2.2.0' },
    assetallocationinfo: { version: '>=3.0.0' },
    assetallocationsend: { version: '>=3.0.0' },
    assetallocationsenderstatus: { version: '>=3.0.0' },
    assetinfo: { version: '>=3.0.0' },
    assetnew: { version: '>=3.0.0' },
    assetsend: { version: '>=3.0.0' },
    assettransfer: { version: '>=3.0.0' },
    assetupdate: { version: '>=3.0.0' },
    certInfo: { version: '>=2.2.0' },
    certFilter: { version: '>=2.2.0' },
    certHistory: { version: '>=2.2.0' },
    certNew: { version: '>=2.2.0' },
    certTransfer: { version: '>=2.2.0' },
    certUpdate: { version: '>=2.2.0' },
    dumphdinfo: { version: '>=3.0.0' },
    escrowAcknowledge: { version: '>=2.2.0' },
    escrowCreateRawTransaction: { version: '>=2.2.0' },
    escrowCompleteRefund: { version: '>=2.2.0' },
    escrowCompleteRelease: { version: '>=2.2.0' },
    escrowFeedback: { version: '>=2.2.0' },
    escrowFilter: { version: '>=2.2.0' },
    escrowBidHistory: { version: '>=2.2.0' },
    escrowFeedbackHistory: { version: '>=2.2.0' },
    escrowInfo: { version: '>=2.2.0' },
    escrowBid: { version: '>=2.2.0' },
    escrowAddShipping: { version: '>=2.2.0' },
    escrowNew: { version: '>=2.2.0' },
    escrowRefund: { version: '>=2.2.0' },
    escrowRelease: { version: '>=2.2.0' },
    fundrawtransaction: { version: '>=3.0.0' },
    getBlock: { version: '>=2.2.0' },
    getBlockchainInfo: { version: '>=2.2.0' },
    getBlockCount: { version: '>=2.2.0' },
    getInfo: { version: '>=2.2.0' },
    getMiningInfo: { version: '>=2.2.0' },
    getNetworkInfo: { version: '>=2.2.0' },
    getPeerInfo: { version: '>=2.2.0' },
    verifyMessage: { version: '>=2.2.0' },
    syscoinSendRawTransaction: { version: '>=2.2.0' },
    syscoinDecodeRawTransaction: { version: '>=2.2.0' },
    syscoinQuery: { version: '>=2.2.0' },
    pruneSyscoinServices: { version: '>=2.2.0' },
    dumpPrivKey: {
        obfuscate: {
            response: () => '******'
        },
        version: '>==2.2.0'
    },
    dumpWallet: { version: '>==2.2.0' },
    debug: { version: '>=3.0.0' },
    encryptWallet: {
        obfuscate: {
            request: params => set([...params], '[0]', '******')
        },
        version: '>==2.2.0'
    },
    getaddressdeltas: { version: '>=3.0.0' },
    getAccount: { version: '>=2.2.0' },
    getAccountAddress: { version: '>=2.2.0' },
    getAddressBalance: { version: '>=2.2.0' },
    getAddressUtxos: { version: '>=2.2.0' },
    getaddressmempool: { version: '>=3.0.0' },
    getaddresstxids: { version: '>=3.0.0' },
    getblockhashes: { version: '>=3.0.0' },
    getblockheaders: { version: '>=3.0.0' },
    getchaintips: { version: '>=3.0.0' },
    getspentinfo: { version: '>=3.0.0' },
    getgenerate: { version: '>=3.0.0' },
    getgovernanceinfo: { version: '>=3.0.0' },
    getpoolinfo: { version: '>=3.0.0' },
    getsuperblockbudget: { version: '>=3.0.0' },
    getBalance: { version: '>=2.2.0' },
    getWalletBalance: { version: '>=2.2.0' },
    getNewAddress: { version: '>=2.2.0' },
    getReceivedByAccount: { version: '>=2.2.0' },
    getReceivedByAddress: { version: '>=2.2.0' },
    getTransaction: { version: '>=2.2.0' },
    getUnconfirmedBalance: { version: '>=2.2.0' },
    getWalletInfo: { version: '>=2.2.0' },
    getblocktemplate: { version: '>=3.0.0' },
    gobject: { version: '>=3.0.0' },
    importelectrumwallet: { version: '>=3.0.0' },
    importAddress: { version: '>=2.2.0' },
    importPrivKey: {
        obfuscate: {
            request: () => ['******']
        },
        version: '>==2.2.0'
    },
    importPubKey: { version: '>=2.2.0' },
    importWallet: { version: '>=2.2.0' },
    instantsendtoaddress: { version: '>=3.0.0' },
    keepass: { version: '>=3.0.0' },
    lockunspent: { version: '>=3.0.0' },
    listAccounts: { version: '>=2.2.0' },
    listAddressGroupings: { version: '>=2.2.0' },
    listReceivedByAccount: { version: '>=2.2.0' },
    listReceivedByAddress: { version: '>=2.2.0' },
    listSinceBlock: { version: '>=2.2.0' },
    listTransactions: { version: '>=2.2.0' },
    listunspent: { version: '>=3.0.0' },
    masternode: { version: '>=3.0.0' },
    masternodebroadcast: { version: '>=3.0.0' },
    masternodelist: { version: '>=3.0.0' },
    mnsync: { version: '>=3.0.0' },
    offerInfo: { version: '>=2.2.0' },
    offerHistory: { version: '>=2.2.0' },
    offerFilter: { version: '>=2.2.0' },
    offerLink: { version: '>=2.2.0' },
    offerNew: { version: '>=2.2.0' },
    offerUpdate: { version: '>=2.2.0' },
    privatesend: { version: '>=3.0.0' },
    sentinelping: { version: '>=3.0.0' },
    spork: { version: '>=3.0.0' },
    sendrawtransaction: { version: '>=3.0.0' },
    setgenerate: { version: '>=3.0.0' },
    setnetworkactive: { version: '>=3.0.0' },
    sendFrom: { version: '>=2.2.0' },
    sendMany: { version: '>=2.2.0' },
    sendToAddress: { version: '>=2.2.0' },
    signMessage: { version: '>=2.2.0' },
    validateAddress: { version: '>=2.2.0' },
    voteraw: { version: '>=3.0.0' },
    walletLock: { version: '>=2.2.0' },
    walletPassphrase: {
        obfuscate: {
            request: params => set([...params], '[0]', '******')
        },
        version: '>==2.2.0'
    },
    walletPassphraseChange: { version: '>=2.2.0' }
};
