let agencias = [
    {
        id: 1,
        nome: "Agência Central",
        endereco: "Rua Principal, 123"
    }];

exports.createAgencia = (req, res) => {
    const { nome, endereco } = req.body;
    const novaAgencia = {
        id: agencias.length + 1,
        nome,
        endereco
    };
    agencias.push(novaAgencia);
    res.status(201).json(novaAgencia);
};

exports.getAgencias = (req, res) => {
    res.status(200).json(agencias);
};

exports.updateAgencia = (req, res) => {
    const { id } = req.params;
    const { nome, endereco } = req.body;
    const agencia = agencias.find(a => a.id === parseInt(id));
    if (!agencia) return res.status(404).json({ message: 'Agência não encontrada' });

    agencia.nome = nome || agencia.nome;
    agencia.endereco = endereco || agencia.endereco;

    res.status(200).json(agencia);
};

exports.deleteAgencia = (req, res) => {
    const { id } = req.params;
    const index = agencias.findIndex(a => a.id === parseInt(id));
    if (index === -1) return res.status(404).json({ message: 'Agência não encontrada' });

    agencias.splice(index, 1);
    res.status(200).json({ message: 'Agência deletada' });
};
