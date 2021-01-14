import user from '../../service/user.js'

export default {
    getTrainee: (parent, args) => {
        const { id } = args;
        return user.getUser(id);
    },
    getAllTrainees: (parent, args) => {
        return user.getAllUsers();
    }
}