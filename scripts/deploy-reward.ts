import { ethers, network } from 'hardhat'

async function main() {
  // Uncomment below to emulate block mining (instead of instant confirm tx)
  await network.provider.send('evm_setIntervalMining', [5000])

  const [owner] = await ethers.getSigners()
  const Reward = await ethers.getContractFactory('Reward')
  const reward = await Reward.deploy('ipfs://QWER')

  await reward.deployed()
  console.log('Mint contract deployed to:', reward.address)

  const address = ''
  await owner.sendTransaction({
    to: address,
    value: ethers.utils.parseEther('420.69'),
  })
  console.log(`ETH sent to ${address}`)

  // Example below to mint
  // const hash =
  //   '0x144190d980318c7fd41ead9d92b5041e1aa2a2383fb63c083f99a35e157a960b'
  // const signature =
  //   '0x7171ce91617e8a2fc6427ae9e34233dd3f6832c08cf89a80ea38b2e0f0d15bf21ab034b2b1799a5cc6dcbac5bfa24e391d3c60be15dc5f9f858b3f206f32469e1b'
  // await reward.connect(owner).mint(hash, signature)
  // const ownerAddress = await owner.getAddress()
  // console.log((await reward.balanceOf(ownerAddress, 1)).toString())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
