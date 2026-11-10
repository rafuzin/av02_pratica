import { jogosRepository } from "../repository/jogo.repository.js";

class JogosServices {
    async getall() {
        return jogosRepository.getAll()
    }

    async getById(id) {
        return jogosRepository.getById(id)
    }

    async create(dados) {
        return jogosRepository.create(dados)
    }

    async update(id) {

        return jogosRepository.update(id)
    }

    async delete(id) {

        return jogosRepository.delete(id)
    }
}

export const jogosServices = new JogosServices();