SELECT * FROM motoristas;

CREATE TABLE motoristas (
	ID integer not null,
	Nome varchar(100) not null,
	Descricao varchar(200) not null,
	Carro varchar(100) not null,
	Avaliacao varchar(200) not null,
	Taxa varchar(50) not null,
	Km_Minimo integer not null,
	--primary key
	CONSTRAINT pk_cln_ID PRIMARY KEY (ID)
);

INSERT INTO motoristas(Nome, Descricao, Carro, Avaliacao, Taxa, Km_Minimo) VALUES ('Homer Simpson', 'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).', 'Plymouth Valiant 1973 rosa e enferrujado', '2/5 Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.', 'R$ 2,50/km', 1);
INSERT INTO motoristas(Nome, Descricao, Carro, Avaliacao, Taxa, Km_Minimo) VALUES ('Dominic Toretto', 'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.', 'Dodge Charger R/T 1970 modificado', '4/5 Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!', 'R$ 5,00/km', 5);
INSERT INTO motoristas(Nome, Descricao, Carro, Avaliacao, Taxa, Km_Minimo) VALUES ('James Bond', 'Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.', 'Aston Martin DB5 clássico', '5/5 Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.', 'R$ 10,00/km', 10);
