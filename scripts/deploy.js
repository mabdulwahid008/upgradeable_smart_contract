const { ethers, upgrades } = require("hardhat");
const hre = require("hardhat");

async function main() {
 const Contract_V1  = await ethers.getContractFactory('Contract_V1')

 const contract = await upgrades.deployProxy(Contract_V1, [10], {
   initializer: 'setNum'
 });

 await contract.deployed();

 console.log('Contract Address ', contract.address);

 
//  console.log("Sleeping...");

//  await sleep(40000);

//  await hre.run("verify:verify", {
//    address: contract.address,
//    constructorArguments: [],
//  });

}


// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));

// }

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0xBbd2137d7492fD03adb05d4E682D2D77Ee0c1Cad

//0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0