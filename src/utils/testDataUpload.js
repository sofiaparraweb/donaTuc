// testDataUpload.js
const  User = require('../models/User');
const  Donation  = require('../models/Donation');
const  Role  = require('../models/Role');
const  Publication  = require('../models/Publication'); // Ajusta la ruta según la ubicación de tus modelos
const testData = require('./testData');

const uploadTestData = async () => {
  try {
    // Insertar datos de usuarios
    await User.bulkCreate(testData.users);

    // Insertar datos de roles
    await Role.bulkCreate(testData.roles);

    // Insertar datos de publicaciones
    await Publication.bulkCreate(testData.publications);

    // Insertar datos de donaciones
    await Donation.bulkCreate(testData.donations);

    console.log('Datos de prueba cargados exitosamente.');
  } catch (error) {
    console.error('Error al cargar los datos de prueba:', error);
  }
};

// Llama a la función para cargar los datos de prueba
uploadTestData();
