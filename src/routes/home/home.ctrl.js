"use strict";

// const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

const output = {
    home: (req, res) =>{
        res.render("home/index");
    },
    
    login:  (req, res)=> {
        res.render("home/login");
    },

    register: (req, res) => {
        res.render("home/register");
    },
    
    Karina: (req, res) => {
        res.render("home/Karina");
    },
    Music : (req, res) => {
        res.render("/Users/soyeon/Desktop/낙서장/aespa/src/views/home/goods/Karina/Music.ejs");
    },

    Winter: (req, res) => {
        res.render("home/Winter");
    },
    Giselle: (req, res) => {
        res.render("home/Giselle");
    },
    Ningning: (req, res) => {
        res.render("home/Ningning");
    }
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
    },
    register: async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
    Karina: async (req, res) => {
        res.render("Karina");
    },
    music: async (req, res) => {
        res.render("Music");
    },
    Winter: async (req, res) => {
        res.render("Winter");
    },
    Giselle: async (req, res) => {
        res.render("Giselle");
    },
    Ningning: async (req, res) => {
        res.render("Ningning");
    }
};



module.exports = {
    output, 
    process,
};