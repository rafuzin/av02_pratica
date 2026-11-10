import { knex } from "../database/knex.js";

class JogosRepository {

    async getAll() {
        const res = await pool.query('SELECT * FROM jogos');
        return res.rows;
    }
    async getById(id) {
        return knex('jogos').where({ id }).first();
    }
    async create(dados) {
        const { titulo, plataforma, preco, data_lancamento } = dados;

        const res = await pool.query(
            'INSERT INTO jogos titulo, plataforma, preco, data_lancamento) VALUES ($1, $2, $3, $4) RETURNING *',
            [titulo, plataforma, preco, data_lancamento]
        );

        return res.rows[0];
    }
    async update(id, dados) {
        const { titulo, plataforma, preco, data_lancamento } = dados;
        const res = await pool.query(
            'UPDATE jogos SET utitulo = $1, plataforma = $2, preco = $3, data_lancamento = $4 WHERE id = $5 RETURNING *',
            [titulo, plataforma, preco, data_lancamento, id]
        );
        return res.rows[0];
    }
    async delete(id) {
        const res = await pool.query('DELETE FROM jogos WHERE id = $1 RETURNING *', [id]);
        return res.rows[0];
    }
}

export const jogosRepository = new JogosRepository();