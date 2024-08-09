import mysql from 'mysql2/promise';

async function initializeDatabase() {
  const connection = await mysql.createConnection({
    host: 'database',
    user: 'root',
    password: 'root',
    database: 'nodedb'
  });

  await connection.execute(`
    CREATE TABLE IF NOT EXISTS characterSW (
      id INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      PRIMARY KEY (id)
    );
  `);

  await connection.end();
}

initializeDatabase().then(() => {
  console.log('Database initialized');
}).catch(err => {
  console.error('Error initializing database:', err);
});

// Código de inicialização do servidor existente
