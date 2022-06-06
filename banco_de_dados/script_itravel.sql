create database itravel;

use itravel;

create table usuario (
	id_usuario int primary key auto_increment,
    nome varchar(45),
    email varchar(100),
    senha varchar(45));
    
create table pais (
	id_pais int primary key auto_increment,
    nome_pais varchar(45),
    continente varchar(45));
    
create table curtida_pais (
	id_curtida_pais int primary key auto_increment,
	fk_usuario int,
    foreign key (fk_usuario) references usuario(id_usuario),
    fk_pais int,
    foreign key (fk_pais) references pais(id_pais),
    curtida int, 
    check (curtida = 1),
    data_hora datetime default current_timestamp);

insert into pais values (null, 'Canadá', 'América'), (null, 'Japão', 'Ásia'), (null, 'México', 'América'), (null, 'França', 'Europa'), (null, 'Itália', 'Europa');    

select * from usuario;
select * from pais;
select * from curtida_pais;

insert into curtida_pais values (null, 1, 5, 1, default);

select pais.nome_pais as 'Nome do país', sum(curtida_pais.curtida) as 'Quantidade de curtidas' from pais
																								join curtida_pais 
                                                                                                on id_pais =  fk_pais 
                                                                                                group by nome_pais;

select usuario.nome as 'Nome do usuario', sum(curtida_pais.curtida) as 'Quantidade de curtidas' from usuario
																								join curtida_pais 
                                                                                                on id_usuario = fk_usuario 
                                                                                                group by nome;