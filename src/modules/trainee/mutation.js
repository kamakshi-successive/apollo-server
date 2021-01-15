import userInstance from '../../service/user.js'

export default {
    createTrainee: (parent, args, context) => {
        const { user } = args;
        return userInstance.createUser(user);
    },
    updateTrainee: (parent, args, context) => {
        const { id, role } = args;
        return userInstance.updateUser(id, role);
    },
    deleteTrainee: (parent, args, context) => {
        const { id } = args;
        return userInstance.deleteUser(id);
    },
}


// mutation {
//     updateTrainee(id: "2", name: "sasa", role: "ggg"){
//       name
//     }
//   }

// mutation{
//     createTrainee(user: {name: "Kamakshi", email: "kamakshi@gmail.com", role: "Trainee"}){
//       id,
//       name,
//       email,
//       role
//     }
//   }

