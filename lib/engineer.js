const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github, name, id, email) {

        this.github = github;

        super(name, id, email);

        getGithub() {
            return this.github;
        };

        // getRole() {
        //     return Engineer
        // };
    }
}