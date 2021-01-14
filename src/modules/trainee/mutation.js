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



// export default {
//     addTrainee: (parent, args) => {
//         let Trainee = new Trainee({
//             id: args.id,
//             name: args.name,
//             email: args.email,
//         });
//         return Trainee.save();
//     },
//     updateTrainee: (parent, args) => {
//         if (!args.id) return;
//         return Trainee.findOneandUpdate(
//             {
//                 _id: args.id
//             },
//             {
//                 $set: {
//                     id: args.id,
//                     name: args.name,
//                     email: args.email,
//                 }
//             }, {new: true}, (err, Trainee) => {
//                 if (err) {
//                     console.log('Something went wrong when updating the Trainee Data');
//                 }
//                 else {
//                     console.log('Successfully Updated Trainee Data')
//                 }
//             }
//         )
//     }
// }