import { Usuario } from "../models/Usuario.js";

class UsuarioController {
  static inserir = async (req, res) => {
    const { nome, idade, ativo, email } = req.body;
    const usuario = { nome, idade, ativo, email };

    Object.keys(usuario).map(key =>{
      if (!usuario[key]) {
        res.status(422).json(`O campo ${key}, é vazio`)
        // interrompe a criação, ou seja, abaixo do return nada será executado
       return
      }
    })

    const usuarioDB = await Usuario.create(usuario);
    res.status(201).json({data: usuarioDB, msg: "usuario criado" });
  };

  static atualizarUsuario = async (req, res) => {
    const id = req.params.id;
    const { nome, idade, ativo, email } = req.body;
    const usuario = { nome, idade, ativo, email };
    await Usuario.updateOne({ _id: id }, usuario);
    res.status(200).json("Usuário atualizado com sucesso!");
  };

  static excluirPorId = async (req, res) => {
    const id = req.params.id;
    if(id){

    }
    const nome = await Usuario.findOne({ _id: id }); //pega o objeto que será deletado da Entidade Usuario
    await Usuario.deleteOne({ _id: id });
    const date = moment(new Date()).format("DD/MM/YYY hh:mm:ss"); //retorna um log com a data da exclusao do usuario
    res.status(200).json(`O usuário ${nome.nome} foi deletado em: ${date}`);
  };

  static buscarTodos = async (req, res) => {

    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  };

  static buscarPorId = async (req, res) => {
    const id = req.params.id;

    if(id.length < 24 || id.length > 24){
      
      res.status(422).json({msg: 'Tamanho inválido do Id'})
      return
    }
    const usuario = await Usuario.findOne({ _id: id });
    console.log(usuario);
    if(!usuario){
      res.status(422).json({msg: 'Usuário não encontrado'})
      return
    }

      res.status(200).json(usuario);
    
  
  };
}

export default UsuarioController