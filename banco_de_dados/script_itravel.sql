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
	fk_usuario int,
    foreign key (fk_usuario) references usuario(id_usuario),
    fk_pais int,
    foreign key (fk_pais) references pais(id_pais),
    primary key (fk_usuario, fk_pais),
    curtida int, 
    check (curtida = 1),
    data_hora datetime default current_timestamp);