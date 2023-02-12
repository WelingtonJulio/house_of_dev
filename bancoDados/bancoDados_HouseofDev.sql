SELECT * FROM db_houseofdev.cadastro_pessoa_fisica;

=> 1 Inner Join <=
 
select * from login
inner join cadastro_pessoa_fisica
on login.Cadastro_Pessoa_Fisica_idPessoaFisica = cadastro_pessoa_fisica.idPessoaFisica

=> 2 Join On <=
    
select Login_idLogin, qtdProdutos AS valor
from login_e_produtos
join produtos
on produtos.valor = valor

=> 3 Select From <=
SELECT
  `login`.`cpf`,
  `login_e_produtos`.`valorTotal`
FROM
  `login`,
  `login_e_produtos`;
  
  




