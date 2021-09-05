const BlockChain = require("./blockchain");

describe("Blockchain", () => {
  it("should return empty error log when blockchain is valid", async () => {
    let blockchain = new BlockChain.Blockchain();
    blockchain.chain = [
      {
        hash: "178815fbc180777596258b3521a6bb440b55e13dcce9b75c80b4ae014893a2a6",
        height: 0,
        body: "7b2264617461223a2247656e6573697320426c6f636b227d",
        time: "1630880187",
        previousBlockHash: null,
      },
      {
        hash: "a0ed039941ccc160652e9f324488f2a22f16e47a65f5e42c39b549311f6dd1ec",
        height: 1,
        body: "7b2273746172223a7b22646563223a223638203638203638222c227261223a223233682030386d20312e3073222c2273746f7279223a226e6577207374617231227d2c226f776e6572223a22314d5555354a42634e3365534463674e5059426a4e73314d7737746751475a546e55227d",
        time: "1630880232",
        previousBlockHash:
          "178815fbc180777596258b3521a6bb440b55e13dcce9b75c80b4ae014893a2a6",
      },
    ];
    blockchain.height = 1;

    try {
      await blockchain.validateChain();
    } catch (actual) {
      expect(actual).toEqaul(true);
    }

    //await expect(blockchain.validateChain()).rejects.toBe(true);
  });
  /* it("should return errors when blockchain is not valid", async () => {
    let blockchain = new BlockChain.Blockchain();
    blockchain.chain = [
      {
        hash: "178815fbc180777596258b3521a6bb440b55e13dcce9b75c80b4ae014893a2a6",
        height: 0,
        body: "7b2264617461223a2247656e6573697320426c6f636b227d",
        time: "1630880187",
        previousBlockHash: null,
      },
      {
        hash: "a0ed039941ccc160652e9f324488f2a22f16e47a65f5e42c39b549311f6dd1ec",
        height: 1,
        body: "7b2273746172223a7b22646563223a223638203638203638222c227261223a223233682030386d20312e3073222c2273746f7279223a226e6577207374617231227d2c226f776e6572223a22314d5555354a42634e3365534463674e5059426a4e73314d7737746751475a546e55227d",
        time: "1630880232",
        previousBlockHash:
          "178815fbc180777596258b3521a6bb440b55e13dcce9b75c80b4ae014893a2a66",
      },
    ];
    blockchain.height = 1;

    //const actual = await blockchain.validateChain();
    //expect(actual).toEqaul(false);
    await expect(blockchain.validateChain()).rejects.toBe(true);
  }); */
});
