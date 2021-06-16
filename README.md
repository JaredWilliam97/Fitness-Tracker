Workout Tracker

- In this app, I'll be creating a workout tracker. In this app I will create a Mongo database with a Mongoose schema and handle routes with Express.

![image](https://user-images.githubusercontent.com/80869140/122142006-21670700-ce14-11eb-953e-7d28223ef963.png)




- As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.

This will allow consumers to reach goals more quickly when they track their workout progress.

- When you load the page, you will be given the option to create a new workout or continue with their last workout.

You will be able to:

- Add exercises to the most recent workout plan.

- Add new exercises to a new workout plan.

- View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

- View the total duration of each workout from the past seven workouts on the `stats` page.

> **Important:** Look into using a MongoDB aggregate function to dynamically add up and return the total duration for each workout. Check out the [MongoDB documentation on the $addFields](https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/), the [MongoDB documentation on the $sum operator](https://docs.mongodb.com/manual/reference/operator/aggregation/sum/), and the [Mongoose documentation on aggregate functions](https://mongoosejs.com/docs/api.html#aggregate_Aggregate) to learn how it can be accomplished.

To deploy an application with a MongoDB database to Heroku, you'll need to set up a MongoDB Atlas account and connect a database from there to your application. Be sure to use the following guides for support:

- [Set Up MongoDB Atlas](../04-Important/MongoAtlas-Setup.md)

- [Deploy with Heroku and MongoDB Atlas](../04-Important/MongoAtlas-Deploy.md)






















- The URL to the deployed application

https://lit-inlet-24856.herokuapp.com/

* URL to the GitHub repository

https://github.com/JaredWilliam97/Fitness-Tracker
