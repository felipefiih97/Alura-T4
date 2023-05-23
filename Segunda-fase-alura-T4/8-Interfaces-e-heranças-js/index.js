import {Cliente} from "./Cliente.js"; 
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemasAutenticação.js";

const diretor01 = new Diretor("Felipe",10000, 65439234); 
diretor01.cadastrarSenha("123456")

console.log(diretor01)

const estalogado = SistemaAutenticacao.login(diretor01,"123456");

const cliente01 = new Cliente('Ana',2129392031,"12345" );

const clienteEstalogado = SistemaAutenticacao.login(cliente01,"12345")
console.log(clienteEstalogado)
console.log(estalogado)
