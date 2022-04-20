
const t1 = artifacts.require("t1");


module.exports = async function(deployer) {

    const accounts = await web3.eth.getAccounts();

    await console.log(accounts)


    let t1con = await deployer.deploy(t1);

    await console.log("T1 Address is deployed AT " + t1con.address);


};