const expectEvent = require("@openzeppelin/test-helpers/src/expectEvent");

const t1 = artifacts.require("t1");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("t1", function (/* accounts */) {
  let instance;

  before("setup development environment", async function () {
    instance = await t1.deployed();
    return assert.isTrue(true);
  });

  it("should initially set value to 1", async function () {
    const val = await instance.value();

    expect(val.toNumber()).to.equal(1);
  });

  it("should update the value", async function () {
    await instance.setValue(42);

    const val = await instance.value();

    expect(val.toNumber()).to.equal(42);
  });
});
