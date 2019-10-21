const db = require("./conn.js");

class Ranking {
    constructor(id, topic, rank) {
        this.id = id;
        this.topic = topic;
        this.rank = rank;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT topic.id,
                    topic.topic,
                    topic.status_id,
                    ranking.rank FROM topic
                    INNER JOIN ranking ON topic.status_id = ranking.id
                    ORDER BY topic.id;`);
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

    static async update(topic, rank) {
        const infoUpdate = `UPDATE topic SET status_id=${rate} WHERE topic= '${topic}'`

        try {
            const response = await db.any(infoUpdate);
            return response;

        } catch(err) {
            return err.message;
        }
    }
}

module.exports = Ranking;