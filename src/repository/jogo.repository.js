import { knex } from "../database/knex.js";

class JogoRepository {

    async getAll() {
        const jogos = await knex("jogos").select("*");
        return jogos;
    }

    async getById(id) {
        const jogo = await knex("jogos").where({ id }).first();
        return jogo;
    }

    async create(dados) {
        const jogo = await knex("jogos")
            .insert(dados)
            .returning("*");

        return jogo[0];
    }

    async update(id, dados) {
        const jogo = await knex("jogos")
            .where({ id })
            .update(dados)
            .returning("*");

        return jogo[0];
    }

    async delete(id) {
        const jogo = await knex("jogos")
            .where({ id })
            .delete()
            .returning("*");

        return jogo[0];
    }
}

export const jogoRepository = new JogoRepository();