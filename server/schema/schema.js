const User = require('../models/User.js');
const Course = require('../models/Course.js');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
} = require('graphql');

// User type
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID},
        Fname: {type: GraphQLString},
        Lname: {type: GraphQLString},
        userName: {type: GraphQLString},
        age: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
        city: {type: GraphQLString},
        Address: {type: GraphQLString},
        YearsOfExperiance: {type: GraphQLString},
        school: {type: GraphQLString},
        roll: {type: GraphQLString},
    })
});

// Course type
const CourseType = new GraphQLObjectType({
    name: 'Course',
    fields: () => ({
        id: { type: GraphQLID},
        name: {type: GraphQLString},
        category: {type: GraphQLString},
        description: {type: GraphQLString},
        language: {type: GraphQLString},
        document: {type: GraphQLString},
        video: {type: GraphQLString},
        price: {type: GraphQLString},
    })
});

// Root
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {

        courses: {
            type: new GraphQLList(CourseType),
            resolve(parent, args){
                return courses;
            },
        },
        course: {
            type: CourseType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return courses.find((course) => course.id === args.id);
            }
        },

        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return users;
            },
        },
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return users.find((user) => user.id === args.id);
            }
        },
    }
});




module.exports = new GraphQLSchema({
    query: RootQuery
})