import { jogosServices } from '../services/jogo.service.js';

class JogosController {
    async getAll(_req, res) {
        try {
            return res.json(await jogosServices.getall());
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao procurar jogo.' });
        }
    }
    async getById(req, res) {
        try {
            const Jogos = await jogosServices.getById(req.params.id);
            if (!Jogos) return res.status(404).json({ erro: 'jogo não encontrado.' });
            return res.json(Jogos);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao buscar jogo.' });
        }
    }
    async create(req, res) {
        try {
            return res.status(201).json(await jogosServices.create(req.body));
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao inserir o jogo.' });
        }
    }
    async update(req, res) {
        try {
            const Jogos = await jogosServices.update(req.params.id, req.body);
            if (!Jogos) return res.status(404).json({ erro: 'jogo não encontrado.' });
            return res.json(Jogos);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao atualizar o jogo.' });
        }
    }
    async delete(req, res) {
        try {
            const Jogos = await jogosServices.delete(req.params.id);
            if (!Jogos) return res.status(404).json({ erro: 'jogo não encontrado.' });
            return res.json(Jogos);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao excluir jogo.' });
        }
    }

}
export const jogosController = new JogosController();