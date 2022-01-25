
const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const feedbackContractFactory = await hre.ethers.getContractFactory("FeedbackPortal");
    const feedbackContract = await feedbackContractFactory.deploy();
    await feedbackContract.deployed();

    console.log("Contract deployed to: ", feedbackContract.address);
    console.log("Contract deployed by: ", owner.address);

    let feedbackArray;
    feedbackArray = await feedbackContract.getAllFeedback();

    let feedbackTxn = await feedbackContract.submitFeedback("Super awsome web3 app!");
    await feedbackTxn.wait();

    feedbackArray = await feedbackContract.getAllFeedback();

    feedbackTxn = await feedbackContract.connect(randomPerson).submitFeedback("I like what you're building!");
    await feedbackTxn.wait();

    feedbackArray = await feedbackContract.getAllFeedback();

    console.log("Execution finished, total feedback received: ", feedbackArray);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();