const { ethers } = require("hardhat");

async function main() {
 const upgradeableContract  = await ethers.getContractFactory('UpgradeableContract')

 const contract = await upgradeableContract.deploy();

 await contract.deployed();

 console.log('Contract Address ', contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x5FbDB2315678afecb367f032d93F642f64180aa3