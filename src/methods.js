/* eslint-disable no-inline-comments,sort-keys */
import { set } from 'lodash';

/**
 * Export available rpc methods.
 */

/**
 * @Dev
 * follow the versioning rule below
 * to update changes:
 * *new as of version : '>= new_version'
 * *removed as of version: '< new_version'
 * *existed for version range: '>= start_version < end_version'
 */

export default {
  addMultiSigAddress: { version: '>=2.2.0' },
  aliasAddScript: { version: '>=2.2.0' },
  aliasBalance: { version: '>=2.2.0' },
  aliasBalanceMulti: { version: '>=3.0.5' },
  aliasClearWhitelist: { version: '>=2.2.0' },
  aliasCount: { version: '>=2.2.0 <3.0.0' },
  aliasFilter: { version: '>=2.2.0' },
  aliasHistory: { version: '>=2.2.0' },
  aliasInfo: { version: '>=2.2.0' },
  aliasList: { version: '>=2.2.0 <3.0.0' },
  aliasNew: { version: '>=2.2.0' },
  aliasPay: { version: '>=3.0.0' },
  aliasTxHistory: { version: '>=2.2.0' },
  aliasUpdate: { version: '>=2.2.0' },
  aliasUpdateWhitelist: { version: '>=2.2.0' },
  aliasWhitelist: { version: '>=2.2.0' },
  assetAllocationCollectInterest: { version: '>=3.0.0' },
  assetAllocationInfo: { version: '>=3.0.0' },
  assetAllocationSend: { version: '>=3.0.0' },
  assetAllocationSenderStatus: { version: '>=3.0.0' },
  assetInfo: { version: '>=3.0.0' },
  assetNew: { version: '>=3.0.0' },
  assetSend: { version: '>=3.0.0' },
  assetTransfer: { version: '>=3.0.0' },
  assetUpdate: { version: '>=3.0.0' },
  certFilter: { version: '>=2.2.0' },
  certHistory: { version: '>=2.2.0' },
  certInfo: { version: '>=2.2.0' },
  certNew: { version: '>=2.2.0' },
  certTransfer: { version: '>=2.2.0' },
  certUpdate: { version: '>=2.2.0' },
  debug: { version: '>=3.0.0' },
  dumpHdInfo: { version: '>=3.0.0' },
  dumpPrivKey: {
    obfuscate: {
      response: () => '******'
    },
    version: '>=2.2.0'
  },
  dumpWallet: { version: '>=2.2.0' },
  encryptWallet: {
    obfuscate: {
      request: params => set([...params], '[0]', '******')
    },
    version: '>=2.2.0'
  },
  escrowAcknowledge: { version: '>=2.2.0' },
  escrowAddShipping: { version: '>=2.2.0' },
  escrowBid: { version: '>=2.2.0' },
  escrowBidHistory: { version: '>=2.2.0' },
  escrowCompleteRefund: { version: '>=2.2.0' },
  escrowCompleteRelease: { version: '>=2.2.0' },
  escrowCreateRawTransaction: { version: '>=2.2.0' },
  escrowFeedback: { version: '>=2.2.0' },
  escrowFeedbackHistory: { version: '>=2.2.0' },
  escrowFilter: { version: '>=2.2.0' },
  escrowInfo: { version: '>=2.2.0' },
  escrowNew: { version: '>=2.2.0' },
  escrowRefund: { version: '>=2.2.0' },
  escrowRelease: { version: '>=2.2.0' },
  fundRawTransaction: { version: '>=3.0.0' },
  getBlock: { version: '>=2.2.0' },
  getBlockCount: { version: '>=2.2.0' },
  getBlockchainInfo: { version: '>=2.2.0' },
  getInfo: { version: '>=2.2.0' },
  getMiningInfo: { version: '>=2.2.0' },
  getNetworkInfo: { version: '>=2.2.0' },
  getPeerInfo: { version: '>=2.2.0' },
  pruneSyscoinServices: { version: '>=2.2.0' },
  signRawTransaction: { version: '>=2.2.0' },
  syscoinDecodeRawTransaction: { version: '>=2.2.0' },
  syscoinListReceivedByAddress: { version: '>=3.0.0' },
  syscoinQuery: { version: '>=2.2.0' },
  syscoinSendRawTransaction: { version: '>=2.2.0' },
  verifyMessage: { version: '>=2.2.0' },
  getAddressDeltas: { version: '>=3.0.0' },
  getAccount: { version: '>=2.2.0' },
  getAccountAddress: { version: '>=2.2.0' },
  getAddressBalance: { version: '>=2.2.0' },
  getAddressUtxos: { version: '>=2.2.0' },
  getAddressMempool: { version: '>=3.0.0' },
  getAddressTxids: { version: '>=3.0.0' },
  getBlockHashes: { version: '>=3.0.0' },
  getBlockHeaders: { version: '>=3.0.0' },
  getChainTips: { version: '>=3.0.0' },
  getSpentInfo: { version: '>=3.0.0' },
  getGenerate: { version: '>=3.0.0' },
  getGovernanceInfo: { version: '>=3.0.0' },
  getPoolInfo: { version: '>=3.0.0' },
  getSuperBlockBudget: { version: '>=3.0.0' },
  getBalance: { version: '>=2.2.0' },
  getWalletBalance: { version: '>=2.2.0' },
  getNewAddress: { version: '>=2.2.0' },
  getReceivedByAccount: { version: '>=2.2.0' },
  getReceivedByAddress: { version: '>=2.2.0' },
  getTransaction: { version: '>=2.2.0' },
  getUnconfirmedBalance: { version: '>=2.2.0' },
  getWalletInfo: { version: '>=2.2.0' },
  getBlockTemplate: { version: '>=3.0.0' },
  gObject: { version: '>=3.0.0' },
  importElectrumWallet: { version: '>=3.0.0' },
  importAddress: { version: '>=2.2.0' },
  importPrivKey: {
    obfuscate: {
      request: () => ['******']
    },
    version: '>=2.2.0'
  },
  importPubKey: { version: '>=2.2.0' },
  importWallet: { version: '>=2.2.0' },
  instantSendToAddress: { version: '>=3.0.0' },
  keepass: { version: '>=3.0.0' },
  lockUnspent: { version: '>=3.0.0' },
  listAccounts: { version: '>=2.2.0' },
  listAddressGroupings: { version: '>=2.2.0' },
  listAssetAllocationTransactions: { version: '>=3.0.5' },
  listReceivedByAccount: { version: '>=2.2.0' },
  listReceivedByAddress: { version: '>=2.2.0' },
  listSinceBlock: { version: '>=2.2.0' },
  listTransactions: { version: '>=2.2.0' },
  listUnspent: { version: '>=3.0.0' },
  masternode: { version: '>=3.0.0' },
  masternodeBroadcast: { version: '>=3.0.0' },
  masternodeList: { version: '>=3.0.0' },
  mnSync: { version: '>=3.0.0' },
  offerInfo: { version: '>=2.2.0' },
  offerHistory: { version: '>=2.2.0' },
  offerFilter: { version: '>=2.2.0' },
  offerLink: { version: '>=2.2.0' },
  offerNew: { version: '>=2.2.0' },
  offerUpdate: { version: '>=2.2.0' },
  privateSend: { version: '>=3.0.0' },
  sentinelPing: { version: '>=3.0.0' },
  spork: { version: '>=3.0.0' },
  sendRawTransaction: { version: '>=3.0.0' },
  setGenerate: { version: '>=3.0.0' },
  setNetworkActive: { version: '>=3.0.0' },
  sendFrom: { version: '>=2.2.0' },
  sendMany: { version: '>=2.2.0' },
  sendToAddress: { version: '>=2.2.0' },
  setBan: { version: '>=2.2.0' },
  signMessage: { version: '>=2.2.0' },
  syscoinListReceiveByAddress: { version: '>=3.0.0' },
  syscoinTxFund: { version: '>=3.0.0' },
  validateAddress: { version: '>=2.2.0' },
  voteRaw: { version: '>=3.0.0' },
  walletLock: { version: '>=2.2.0' },
  walletPassphrase: {
    obfuscate: {
      request: params => set([...params], '[0]', '******')
    },
    version: '>=2.2.0'
  },
  walletPassphraseChange: { version: '>=2.2.0' }
};
