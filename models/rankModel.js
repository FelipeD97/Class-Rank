const db = require("./conn.js");

class Ranking {
    constructor(id, name, rate) {
        this.id = id;
        this.name = name;
        this.rate = rate;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM topic`);
            console.log("response is ", response);
            return response;
            
        } catch(err) {
            return err.message;
        }
    }

    static async getStatus() {
        try {
            const response = await db.any(`SELECT * FROM ranking;`);
            return response;

        } catch(err) {
            return err.message;
        }
    }

    static async update(topic, rate) {
        const infoUpdate = `UPDATE topic SET status_id=${rate} WHERE topic= '${topic}'`

        try {
            const response = await db.any(infoUpdate);
            console.log("response is", response);
            return response;

        } catch(err) {
            console.log("ERROR", err.message);
            return err.message;
        }
    }
}

module.exports = Ranking;