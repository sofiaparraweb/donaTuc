const server = require("./src/app");
const { conn } = require("./src/db.js");
const PORT = process.env.PORT || 3001;
// const { uploadTestData } = require('./src/utils/testDataUpload');

conn.sync({ force: false }).then(async () => {

//   // Verificar y cargar datos de prueba si es necesario
//   const { usersCheck, publicationsCheck, /* ... otros checks ... */ } = await uploadTestData();

//   // Si no hay datos de prueba, cargarlos
//   if (usersCheck === 0 && publicationsCheck === 0 /* ... && otros checks === 0 */) {
//     await testDataUploader();
//   } else {
//     console.log('Los datos ya estaban cargados');
//   }

  // Iniciar el servidor
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

