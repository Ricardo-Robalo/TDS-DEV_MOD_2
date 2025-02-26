let gerentes = [
    {
        id: 1,
        nome: "Carlos Silva",
        agenciaId: 1
    }
]; 


exports.createGerente = (req, res) => {
    const { nome, agenciaId } = req.body;
    const novoGerente = {
        id: gerentes.length + 1, 
        nome,
        agenciaId 
    };
    gerentes.push(novoGerente);
    res.status(201).json(novoGerente);
};


exports.getGerentes = (req, res) => {
    res.status(200).json(gerentes);
};


exports.updateGerente = (req, res) => {
    const { id } = req.params;
    const { nome, agenciaId } = req.body;
    const gerente = gerentes.find(g => g.id === parseInt(id));
    if (!gerente) return res.status(404).json({ message: 'Gerente não encontrado' });

    gerente.nome = nome || gerente.nome;
    gerente.agenciaId = agenciaId || gerente.agenciaId;

    res.status(200).json(gerente);
};


exports.deleteGerente = (req, res) => {
    const { id } = req.params;
    const index = gerentes.findIndex(g => g.id === parseInt(id));
    if (index === -1) return res.status(404).json({ message: 'Gerente não encontrado' });

    gerentes.splice(index, 1);
    res.status(200).json({ message: 'Gerente deletado' });
};
