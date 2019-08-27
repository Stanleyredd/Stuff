module.exports = async () => {
    const Tweet = require("./models/Tweet");
    const User = require("./models/User");

    User.hasMany(Tweet, {as: "Tweets", foreignKey: 'userId'});
    Tweet.belongsTo(User, {as: "User", foreignKey: "userId"});

    const errHandler = (err) => {
        console.error("Error: ", err);
    };


    const user = await User.create({
        username: "test1",
        passwd: "tesat123"
    }).catch(errHandler);
    const users = await User.findAll({
        where: {username: "test1"},
        include: [{model: Tweet, as: "Tweets"}] ///< include used to eager-load associated model
    }).catch(errHandler);


    console.log("Test1 Tweets: ", users);

};