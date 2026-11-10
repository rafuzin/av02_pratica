import { jogoServices } from '../services/jogo.service.js';

class JogosController {
    async getAll(_req, res) {
        try {
            return res.json(await jogoServices.getall());
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao procurar jogo.' });
        }
    }
    async getById(req, res) {
        try {
            const Jogos = await jogoServices.getById(req.params.id);
            if (!Jogos) return res.status(404).json({ erro: 'jogo não encontrado.' });
            return res.json(Jogos);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao buscar jogo.' });
        }
    }
    async create(req, res) {
        try {
            return res.status(201).json(await jogoServices.create(req.body));
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao inserir o jogo.' });
        }
    }
    async update(req, res) {
        try {
            const Jogos = await jogoServices.update(req.params.id, req.body);
            if (!Jogos) return res.status(404).json({ erro: 'jogo não encontrado.' });
            return res.json(Jogos);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao atualizar o jogo.' });
        }
    }
    async delete(req, res) {
        try {
            const Jogos = await jogoServices.delete(req.params.id);
            if (!Jogos) return res.status(404).json({ erro: 'jogo não encontrado.' });
            return res.json(Jogos);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ erro: 'Erro ao excluir jogo.' });
        }
    }

}
export const jogosController = new JogosController();