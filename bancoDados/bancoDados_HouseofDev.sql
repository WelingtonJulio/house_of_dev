

CREATE DATABASE db_houseofdev;
USE db_houseofdev;


CREATE TABLE IF NOT EXISTS `db_HouseofDev`.`Cadastro_Pessoa_Fisica` (
  `idPessoaFisica` INT NOT NULL AUTO_INCREMENT,
  `nomeCompleto` VARCHAR(60) NOT NULL,
  `cpf` VARCHAR(22) NOT NULL,
  `dataNascimento` DATE NOT NULL,
  `telCelular` VARCHAR(18) NOT NULL,
  `email` VARCHAR(90) NOT NULL,
  `senha` VARCHAR(20) NOT NULL,
  `confirmaSenha` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idPessoaFisica`, `cpf`),
  UNIQUE INDEX `cpf_UNIQUE` (`cpf` ASC) VISIBLE);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

SELECT * FROM db_houseofdev.cadastro_pessoa_fisica;
INSERT INTO `db_houseofdev`.`cadastro_pessoa_fisica` (`nomeCompleto`, `cpf`, `dataNascimento`, `telCelular`, `email`, `senha`, `confirmaSenha`) 
VALUES ('Karen Reis', '123.456.789-01', '1997-11-20', '(81)97654-3210', 'kreis@gmail.com', '123karen#', '123karen#');

INSERT INTO `db_houseofdev`.`cadastro_pessoa_fisica` (`nomeCompleto`, `cpf`, `dataNascimento`, `telCelular`, `email`, `senha`, `confirmaSenha`) 
VALUES ('Edgar Brabo', '987.654.321-02', '2000-02-10', '(11)91234-5678', 'edgarBrabo@gmail.com', '@edbrabo2000', '@edbrabo2000');

INSERT INTO `db_houseofdev`.`cadastro_pessoa_fisica` (`nomeCompleto`, `cpf`, `dataNascimento`, `telCelular`, `email`, `senha`, `confirmaSenha`) 
VALUES ('Marieve Lima', '456.789.123-03', '1990-03-15', '(81)98976-5432', 'marieveLima@gmail.com', '#marieve456&', '#marieve456&');

INSERT INTO `db_houseofdev`.`cadastro_pessoa_fisica` (`nomeCompleto`, `cpf`, `dataNascimento`, `telCelular`, `email`, `senha`, `confirmaSenha`) 
VALUES ('Marcel Hikaru', '012.345.678-04', '2001-05-18', '(11)9988-5568', 'hikaruM@gmail.com', '*hikaruM2345', '*hikaruM2345');

INSERT INTO `db_houseofdev`.`cadastro_pessoa_fisica` (`nomeCompleto`, `cpf`, `dataNascimento`, `telCelular`, `email`, `senha`, `confirmaSenha`) 
VALUES ('Welligton Júlio', '345.678.954-05', '1997-07-29', '(11)91133-5698', 'welljulio@gmail.com', '!weljulio97', '!weljulio97');

INSERT INTO `db_houseofdev`.`cadastro_pessoa_fisica` (`nomeCompleto`, `cpf`, `dataNascimento`, `telCelular`, `email`, `senha`, `confirmaSenha`) 
VALUES ('Pedro Henrique','049.376.920-03', '1977-05-28', '(71)91144-5685', 'ornare@icloud.org', '!NPR00BTI8TX', '!NPR00BTI8TX');

INSERT INTO `db_houseofdev`.`cadastro_pessoa_fisica` (`nomeCompleto`, `cpf`, `dataNascimento`, `telCelular`, `email`, `senha`, `confirmaSenha`) 
VALUES ('Sando Alves',  '892.553.730-30', '1982-12-14', '(69)98876-5425', 'id.enim@protonmail.couk', 'NaT88Avf1JR+', 'NaT88Avf1JR+');

INSERT INTO `db_houseofdev`.`cadastro_pessoa_fisica` (`nomeCompleto`, `cpf`, `dataNascimento`, `telCelular`, `email`, `senha`, `confirmaSenha`) 
VALUES ('Miguel Fernades',  '651.420.480-59', '1994-06-09', '(21)96544-5687', 'duis.ac@outlook.edu', '!KNH45RBP3JT@', '!KNH45RBP3JT@');

INSERT INTO `db_houseofdev`.`cadastro_pessoa_fisica` (`nomeCompleto`, `cpf`, `dataNascimento`, `telCelular`, `email`, `senha`, `confirmaSenha`) 
VALUES('Dylan Chan', '463.986.750-61', '2007-10-11', '(21)98844-4187', 'diam.luctus@google.edu', '%$VIS22OYF6SB', '%$VIS22OYF6SB');

INSERT INTO `db_houseofdev`.`cadastro_pessoa_fisica` (`nomeCompleto`, `cpf`, `dataNascimento`, `telCelular`, `email`, `senha`, `confirmaSenha`) 
VALUES ('Jackson Wrang',  '770.455.200-77', '1996-01-26', '(74)99954-2187', 'consectetuer.cursus.et@protonmail.edu', '!#CJV02UHU1DB', '!#CJV02UHU1DB');












---------











SELECT * FROM db_houseofdev.fale_conosco;
INSERT INTO `fale_conosco` (`nome`, `sobrenome`, `email`,`telCelular`,`assunto`, `faleconsco_Img`, `mensagem`) VALUES
  ("Erasmus", "Burgess", "nullam.vitae.diam@protonmail.org", "(14)98852-3587", "Elogio", "Sales and Marketing", "Amazon"),
  ("Whilemina", "Wooten", "neque@aol.ca", "(17)95858-3660", "Critica", "Finances","Chami"),
  ("Kole",  "Salazar", "ac@hotmail.com","(19)92319-8667", "Troca", "Research and Development", "Apple"),
  ("Kadeem", "Welch", "risus.nunc.ac@hotmail.net", "(28)99891-4465", "Danificado", "Tech Support", "Chami"),
  ("Dante", "Brewer", "risus.donec@aol.couk","(16)96659-5566", "Defeito", "Customer Service", "Car"),
  ("Jinyoung", "Chan", "nunc.nulla@icloud.net", "(12)98467-9916", "Defeito", "Human Resources", "Cakewalk"),
  ("Jackson", "Kerr", "facilisis.magna@google.edu","(67)99232-6632", "Elogio", "Advertising", "Microsoft"),
  ("Maria", "Noble", "tincidunt.neque@icloud.net", "(78)98686-4736", "Elogio",  "Public Relations", "Google"),
  ("Berto", "Ward", "vitae@google.com", "(31)94599-4736", "Troca", "Research and Development", "Microsoft"),
  ("Yvete", "Maria", "faucibus@google.org", "(54)98349-4626", "Elogio", "Payroll", "Yahoo");
/* Informações criadas por um gerador de dados e completadas por nós mesmos */










--------










SELECT * FROM db_houseofdev.`inscreva-se`;
INSERT INTO `db_houseofdev`.`inscreva-se` (`nome`, `email`) 
VALUES 
('Edgar Brabo', 'edgarBrabo@gmail.com'),
('Marieve Lima', 'marieveLima@gmail.com'),
('Welligton Júlio', 'welljulio@gmail.com'),
('Karen Reis', 'kreis@gmail.com'),
('Marcel Hikaru', 'hikaruM@gmail.com');











--------












SELECT * FROM db_houseofdev.login;
INSERT INTO `db_houseofdev`.`login` (`email`, `cpf`, `cnpj`, `senha`, `Cadastro_Pessoa_Fisica_idPessoaFisica`) VALUES 
('kreis@gmail.com', '123.456.789-01', '90.696.650/0001-06', '123karen#', 1),
('edgarBrabo@gmail.com', '987.654.321-02', '02.665.197/0001-03', '@edbrabo2000', 2),
('marieveLima@gmail.com', '456.789.123-03', '07.395.475/0001-73', '#marieve456&', 3),
('hikaruM@gmail.com', '012.345.678-04', '45.250.852/0001-75', '*hikaruM2345', 4),
('welljulio@gmail.com', '345.678.954-05', '31.770.122/0001-90', '!weljulio97', 5),
('ornare@icloud.org','049.376.920-03', '34.567.808/0001-77', '!NPR00BTI8TX', 6),
('id.enim@protonmail.couk', '892.553.730-30', '06.655.052/0001-82', 'NaT88Avf1JR+', 7),
('duis.ac@outlook.edu', '651.420.480-59', '25.155.233/0001-94', '!KNH45RBP3JT@', 8),
('diam.luctus@google.edu', '463.986.750-61', '93.560.283/0001-07', '%$VIS22OYF6SB', 9),
('consectetuer.cursus.et@protonmail.edu', '770.455.200-77', '49.450.996/0001-26', '!#CJV02UHU1DB', 10);








-------









SELECT * FROM db_houseofdev.produtos;
INSERT INTO `db_houseofdev`.`produtos` (`produto`, `descricao`, `informacaoTecnica`, `valor`) VALUES 
('Cadeira Gamer Marvel Homem De Ferro', 'Encosto Reclinável 180 graus - Construção Em Aço', 'Material assento: Poliuretano e espuma de alta densidade', '1999.00'),
('Combo Gamer Elg 4 Em 1 Winner', 'Gamer Elg 4 Em 1  Teclado + Mouse + Headset + Mouse Pad', 'Peso: 2000 gramas (bruto com embalagem)', '299.99'),
('Suporte de Parede ELG Multi Articulado', 'ELG Multi Articulado para Monitor de 17 a 34, com Pistão a Gás', 'Compatível com TVs e monitores de 17" a 34" e com peso entre 2kg a 9g', '259.99'),
('Monitor Gamer Curvo Samsung Odyssey 49"', 'Monitor Gamer Curvo Samsung Odyssey+DQHD, Série G9, 240Hz, 1Ms, HDMI', 'Painel QLED, HDR1000 e uma resolução DQHD', '4999.00'),
('Apoio Para Os Pés Ergonômico Mdf Preto', 'Apoio Para Os Pés Ergonômico Mdf Preto 26x39x11cm 1un', 'Confeccionado em poliestireno de alto impacto', '70.54'),
('Echo Dot 3a Geração-Amazon', 'Echo Dot 3a Geração, Smart Speaker Com Alexa, Preto', 'Conectividade Wi-Fi: Wi-Fi de banda dupla', '249.30');









-------







SELECT * FROM db_houseofdev.login_e_produtos;
INSERT INTO `db_houseofdev`.`login_e_produtos` (`Login_idLogin`, `Login_cpf`, `Produtos_idProdutos`, `qtdProdutos`, `valorTotal`) 
VALUES 
(1, '123.456.789-01', 3, 5, 5020.00),
(2, '987.654.321-02', 2, 7, 10899.00),
(3, '456.789.123-03', 6, 1, 74.59),
(4, '012.345.678-04', 5, 1, 2599.00),
(5, '345.678.954-05', 1, 2, 1489.78),
(6, '049.376.920-03', 4, 3, 999.78);







-----




 /* 1 Inner Join */
SELECT * FROM login
INNER JOIN cadastro_pessoa_fisica
on login.Cadastro_Pessoa_Fisica_idPessoaFisica = cadastro_pessoa_fisica.idPessoaFisica;







/* 2 Join On */
SELECT Login_idLogin, qtdProdutos AS produto
FROM login_e_produtos
JOIN produtos
ON produtos.valor = valor;







/* 3 Select From */
SELECT
  `login`.`cpf`,
  `login_e_produtos`.`valorTotal`
FROM
  `login`,
  `login_e_produtos`;
  
  
  
  
  
  
/* 4 WHERE */
SELECT * FROM db_houseofdev.cadastro_pessoa_fisica 
WHERE YEAR(dataNascimento) > 1996;
  












