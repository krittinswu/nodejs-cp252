const initialUsersData = require('./initdata');
const User = require('./user');

class UserData {
    constructor() {
        this.n = 0;
        this.users = [];
        initialUsersData.forEach(user => {
            const newUser = new User(user.name, user.email); 
            this.addUser(newUser);
        });
    }

    // Method to add a user
    addUser(user) {
        this.users.push(user);
        this.n = this.n + 1;
    }

    // Method to clear all users
    removeOneUser() {
        if ( this.users.length > 0 ) {
            return this.users.pop();
        }else{
            return null
        }       
    }

    removeTwoUser() {
        const removed = [];

        // Remove up to two users, returning what was removed.
        for (let i = 0; i < 2; i += 1) {
            const user = this.removeOneUser();
            if (user === null) {
                break;
            }
            removed.push(user);
        }

        return removed;
    }


    // Method to get the number of users
    getUserCount() {
        return this.users.length;
    }

    // Method to clear all users
    clearUsers() {
        this.users = [];
    }

    

}

module.exports = UserData;
