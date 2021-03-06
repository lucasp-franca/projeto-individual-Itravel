/* var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router; */

var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrar_like_canada", function (req, res) {
    usuarioController.cadastrar_like_canada(req, res);
})

router.post("/cadastrar_like_japao", function (req, res) {
    usuarioController.cadastrar_like_japao(req, res);
})

router.post("/cadastrar_like_mexico", function (req, res) {
    usuarioController.cadastrar_like_mexico(req, res);
})

router.post("/cadastrar_like_franca", function (req, res) {
    usuarioController.cadastrar_like_franca(req, res);
})

router.post("/cadastrar_like_italia", function (req, res) {
    usuarioController.cadastrar_like_italia(req, res);
})


router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;