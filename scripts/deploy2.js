const { ethers, upgrades } = require("hardhat");

async function main() {
 const Contract_V2  = await ethers.getContractFactory('Contract_V2')

 const contract = await upgrades.upgradeProxy('0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0', Contract_V2)

 console.log('Contract Upgraded');

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
