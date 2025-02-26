let contas = [
    {
        id: 1,
        numero: "123456789",
        agenciaId: 1,
        clienteId: 1
    }
];

exports.createConta = (req, res) => {
    const { numero, agenciaId, clienteId } = req.body;
    const novaConta = {
        id: contas.length + 1,
        numero,
        agenciaId,
        clienteId
    };
    contas.push(novaConta);
    res.status(201).json(novaConta);
};


exports.getContas = (req, res) => {
    res.status(200).json(contas);
};


exports.updateConta = (req, res) => {
    const { id } = req.params;
    const { numero, agenciaId, clienteId } = req.body;
    const conta = contas.find(c => c.id === parseInt(id));
    if (!conta) return res.status(404).json({ message: 'Conta não encontrada' });

    conta.numero = numero || conta.numero;
    conta.agenciaId = agenciaId || conta.agenciaId;
    conta.clienteId = clienteId || conta.clienteId;

    res.status(200).json(conta);
};


exports.deleteConta = (req, res) => {
    const { id } = req.params;
    const index = contas.findIndex(c => c.id === parseInt(id));
    if (index === -1) return res.status(404).json({ message: 'Conta não encontrada' });

    contas.splice(index, 1);
    res.status(200).json({ message: 'Conta deletada' });
};
