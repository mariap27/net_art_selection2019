const express = require('express');
const fs = require('fs');

const app = express();

app.use('/food_collage', express.static(__dirname + '/food_collage'));
app.use('/froggive_me', express.static(__dirname + '/froggive_me/html'));
app.use('/heaven_gates', express.static(__dirname + '/heaven_gates'));
app.use('/love_letter', express.static(__dirname + '/love_letter'));
app.use('/messy', express.static(__dirname + '/messy'));
app.use('/racing_cars', express.static(__dirname + '/racing_cars'));
app.use('/selfportrait2', express.static(__dirname + '/selfportrait2'));
app.use("/surf", express.static('./surf'));
app.use("/lipo", express.static('./lipo'));

app.listen(9999);
