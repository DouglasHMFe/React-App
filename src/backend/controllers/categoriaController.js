const Categoria = require('../models/categoriaProdutoModel');

const categoriaController = {
// Rota para buscar todas as categorias
    async buscarCategorias(req, res) {
        try {
            // Buscar todas as categorias no banco de dados
            const categorias = await Categoria.findAll();

            // Responder com as categorias encontradas
            res.status(200).json({ categorias });
        } catch (error) {
            console.error('Erro ao buscar categorias:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }   
}

module.exports = categoriaController;
