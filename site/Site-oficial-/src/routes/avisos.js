var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/count", function (req, res) {
    avisoController.count(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.post("/enviar_like_canada/:idUsuario", function (req, res) {
    avisoController.enviar_like_canada(req, res);
});

router.post("/enviar_like_japao/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.post("/enviar_like_mexico/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.post("/enviar_like_franca/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.post("/enviar_like_italia/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;



