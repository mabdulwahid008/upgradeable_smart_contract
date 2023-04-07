require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers")
require("@openzeppelin/hardhat-upgrades")
require("dotenv").config()


module.exports = {
  solidity: "0.8.9",
  // networks:{
  //   mumbai:{
  //     url: process.env.URL,
  //     accounts: [process.env.PRIVATE_KEY]
  //   }
  // },
  // etherscan:{
  //   apiKey: {
  //     polygonMumbai: process.env.PROLYGONSCAN_KEY
  //   }
  // }
};
