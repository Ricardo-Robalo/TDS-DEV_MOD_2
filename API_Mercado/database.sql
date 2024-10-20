CREATE DATABASE mercado;

CREATE TABLE mercado.produto(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(9, 2),
    status BOOLEAN DEFAULT TRUE
);

CREATE TABLE mercado.cliente(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(25),
    status BOOLEAN DEFAULT TRUE
);

CREATE TABLE mercado.pedido(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT NOT NULL,
    FOREIGN KEY(id_cliente) REFERENCES cliente(id),
    id_produto INT NOT NULL,
    FOREIGN KEY(id_produto) REFERENCES produto(id),
    quantidade INT,
    total DECIMAL(9,2)
);

INSERT INTO mercado.cliente(nome, telefone)
VALUES("socorro deus", "1234567890");

SELECT * FROM cleintes;

UPDATE mercado.cliente SET nome = "socorro deus" WHERE id = 1; 

DELETE FROM mercado.cleinte WHERE id =1;