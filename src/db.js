require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY } = process.env;

const sequelize = new Sequelize( 
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    //  DB_DEPLOY,
    { 
        logging: false, 
        native: false,
        // dialectOptions: {
        //     ssl: {
        //             require: true,
        //     }
        // }
    }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((modelDefiner) => {
    const modelName = modelDefiner.name;
    console.log(`Cargando modelo: ${modelName}`);
    modelDefiner(sequelize);
});


// Definimos las relaciones entre los modelos
Object.keys(sequelize.models).forEach((modelName) => {
    if (sequelize.models[modelName].associate) {
        sequelize.models[modelName].associate(sequelize.models);
    }
});

// Capitalizamos los nombres de los modelos ie: fundacion => Fundacion
let entries = Object.entries(sequelize.models);

let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

// Relaciones específicas para el nuevo modelo
const { Comment, PublicationType, Publication, Role, User, Chat, Donation } = sequelize.models;

User.belongsTo(Role);
Role.hasMany(User);

User.hasMany(Publication);
Publication.belongsTo(User);

Publication.hasMany(Comment);
Comment.belongsTo(Publication);

User.hasMany(Donation);
Donation.belongsTo(User);

// User.belongsToMany(User, { through: 'Chat' })
User.belongsToMany(User, { through: 'Chat', as: 'participants' });


Publication.belongsTo(PublicationType);
PublicationType.hasMany(Publication);

// Sincronización de la base de datos
sequelize.sync({ force: false }).then(async () => {
    console.log("Database connected successfully!"); // Mensaje de conexión exitosa
});

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
 };

