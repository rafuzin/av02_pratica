import { jogoRepository } from "../repository/jogo.repository.js";

class JogoServices {
    async getall() {
        return jogoRepository.getAll()
    }

    async getById(id) {
        return jogoRepository.getById(id)
    }

    async create(dados) {
        return jogoRepository.create(dados)
    }

    async update(id) {

        return jogoRepository.update(id)
    }

    async delete(id) {

        return jogoRepository.delete(id)
    }
}

export const jogoServices = new JogoServices();