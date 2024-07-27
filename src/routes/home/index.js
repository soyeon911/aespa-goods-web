"use strict";

const express = require(`express`);
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home); 
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/Karina", ctrl.output.Karina);
router.get("/Winter", ctrl.output.Winter);
router.get("/Giselle", ctrl.output.Giselle);
router.get("/Ningning", ctrl.output.Ningning);
router.get("/Karina/Music", ctrl.output.Music);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/Giselle", ctrl.process.Giselle);
router.post("/Ningning", ctrl.process.Ningning);
router.post("/Karina/Music", ctrl.process.music);

module.exports = router;