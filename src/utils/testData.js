// testData.js

module.exports = {
    users: [
      {
        id: "1",
        fullName: "Juan Pérez",
        username: "juanperez",
        birthDate: "1990-01-01",
        image: "https://example.com/juanperez.jpg",
        phone: "123456789",
        email: "juan@example.com",
        password: "password123",
        status: true,
      },
      {
        id: "2",
        fullName: "Ana González",
        username: "anagonzalez",
        birthDate: "1985-05-15",
        image: "https://example.com/anagonzalez.jpg",
        phone: "987654321",
        email: "ana@example.com",
        password: "securepass",
        status: true,
      },
      // Add more user data as needed
    ],
  
    roles: [
      {
        id: "1",
        name: "admin",
        type: "admin",
      },
      {
        id: "2",
        name: "user",
        type: "user",
      },
      {
        id: "3",
        name: "foundation",
        type: "foundation",
      },
      // Add more role data as needed
    ],
  
    publications: [
      {
        id: "1",
        title: "Publicación 1",
        username: "juanperez",
        description: "Descripción de la publicación 1",
        quantity: 10,
        type: "Type A",
      },
      {
        id: "2",
        title: "Publicación 2",
        username: "anagonzalez",
        description: "Descripción de la publicación 2",
        quantity: 5,
        type: "Type B",
      },
      // Add more publication data as needed
    ],
  
    donations: [
      {
        id: "1",
        title: "Donación 1",
        description: "Descripción de la donación 1",
        status: "pending",
      },
      {
        id: "2",
        title: "Donación 2",
        description: "Descripción de la donación 2",
        status: "completed",
      },
      // Add more donation data as needed
    ],
  };
  