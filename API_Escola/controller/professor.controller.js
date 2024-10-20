let professores = [{
    id: 2,
    nome: "Guilherme",
    email: "gui123pirx@gmail.com",
    senha: "1234567890",
    sala: "sala 114"
}] 

module.exports({
    
    cadastrar: (req,res)=>{
        const { id, nome, email} = req.body;
        
    
        console.log(req.body);  
        professores.push({
            id, nome, email,
        })
    
        res.send(req.body);        
            
    },

    atualizar:(req,res)=>{
        const {id, nome, email} = req.body;

        professores.filter(item =>{
            if(item.id === id){
                item.nome = nome;
                item.email = email;
                return res.send("atualizado com sucesso")
            }
        })

        return res.status(400).send("cliente não encontrado");
    },

    deletar:(req,res)=>{

        const {id} = req.params;
        const index = professores.findIndex(item => item.id == id);

        if(index === -1){
            return res.status(400).send("código não existe")
        }

        professores.splice(index,1);

        return res.send(professores);
    },

    buscar:(req,res)=>{
        return res.status(200).send(professores);
    }

    });