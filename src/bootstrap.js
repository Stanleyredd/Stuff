module.exports = async () => {
    const Tweet = require("./models/Tweet");
    const User = require("./models/User");

    User.hasMany(Tweet, {as: "Tweets", foreignKey: 'userId'});
    Tweet.belongsTo(User, {as: "User", foreignKey: "userId"});

    const errHandler = (err) => {
        console.error("Error: ", err);
    };


    const user = await User.create({
        username: "stanle",
        passwd: "tesadssdsat123"
    }).catch(errHandler);
    const users = await User.findAll({
        where: { username: "stanle" },
        include: [{ model: Tweet, as: "Tweets" }] ///< include used to eager-load associated model
    }).catch(errHandler);

    // const tweet = await Tweet.create({
    //     content: "This is actually the tweet content Tweeted from Iphone",
    //     userId: user.id
    // }).catch(errHandler);



    console.log("Stanle Tweets: ", users);

};