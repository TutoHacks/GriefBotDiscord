/*
 *   Copyright (c) 2021 Bastian Leicht
 *   All rights reserved.
 *   https://bastianleicht.de/license
 */
// jshint esversion: 8
const Discord = require('discord.js');

function getFromArray(array, data) {
    let confirmed = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === data) confirmed = true;
    }
    return confirmed;
}

module.exports.run = async (client, message, args) => {

    message.delete().catch(()=>{});
    if(!getFromArray(client.listeningUsers, message.author.id)) {
        client.listeningUsers.push(message.author.id);
    }

};