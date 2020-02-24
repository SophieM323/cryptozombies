// import the contract artifact
const ZombieFactory = artifacts.require('./ZombieFactory.sol')

// test starts here
contract('ZombieFactory', function (accounts) {
    // predefine the contract instance
    let ZombieFactoryInstance
  
    // before each test, create a new contract instance
    beforeEach(async function () {
        ZombieFactoryInstance = await ZombieFactory.new()
    })
  
    // first test: define what it should do in the string
    it('should create one zombie per address', async function () {
      await ZombieFactoryInstance.createRandomZombie(1, { 'from': accounts[0] })
      // createRandomZombie is a public variable in the contract so you can get it directly via the created call function
      let zombieID = await ZombieFactoryInstance.zombieToOwner([account[0]]) 
      // check whether createRandomZombie is equal to account 0
      assert.equal(zombie1, account[0], "createRandomZombie wasn't properly set")
    }) 
})
