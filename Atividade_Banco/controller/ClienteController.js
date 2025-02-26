let clientes = [
    {
        id: 1,
        nome: "Ana Souza",
        contaId: 1
    }   
]; 


exports.createCliente = (req, res) => {
    const { nome, contaId } = req.body;
    const novoCliente = {
        id: clientes.length + 1, 
        nome,
        contaId 
    };
    clientes.push(novoCliente);
    res.status(201).json(novoCliente);
};


exports.getClientes = (req, res) => {
    res.status(200).json(clientes);
};


exports.updateCliente = (req, res) => {
    const { id } = req.params;
    const { nome, contaId } = req.body;
    const cliente = clientes.find(c => c.id === parseInt(id));
    if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });

    cliente.nome = nome || cliente.nome;
    cliente.contaId = contaId || cliente.contaId;

    res.status(200).json(cliente);
};


exports.deleteCliente = (req, res) => {
    const { id } = req.params;
    const index = clientes.findIndex(c => c.id === parseInt(id));
    if (index === -1) return res.status(404).json({ message: 'Cliente não encontrado' });

    clientes.splice(index, 1);
    res.status(200).json({ message: 'Cliente deletado' });
};
