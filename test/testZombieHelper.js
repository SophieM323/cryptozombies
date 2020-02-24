// import the contract artifact
const ZombieHelper = artifacts.require('./ZombieHelper.sol')

// test starts here
contract('ZombieHelper', function (accounts) {
    // predefine the contract instance
    let ZombieHelperInstance
  
    // before each test, create a new contract instance
    beforeEach(async function () {
        ZombieHelperInstance = await ZombieHelper.new()
    })
  
    // first test: define what it should do in the string
    it('should create one zombie per address', async function () {
      await ZombieHelperInstance.getZombiesByOwner(1)
      // createRandomZombie is a public variable in the contract so you can get it directly via the created call function
      let zombieID = await ZombieHelperInstance.zombieToOwner([account[0], { 'from':account[0] }
      // check whether createRandomZombie is equal to account 0
      assert.equal(zombieID, 1, "creates an address for the first zombie")
      // create a different address for the second zombie
      await ZombieHelperInstance.getZombiesByOwner(2)
      let zombieID = await ZombieHelperInstance.zombieToOwner([account[1], { 'from':account[0] }
      assert.equal(zombieID, 2, "creates a duplicate address for the other zombie")
    }) 
})
