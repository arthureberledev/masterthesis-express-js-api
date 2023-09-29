require("dotenv").config();

const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,

  /**
   * When true, the pool will queue connection requests when limit is reached.
   */
  waitForConnections: true,

  /**
   * The connectionLimit value indicates the maximum number of connections to create at once within the connection pool.
   */
  connectionLimit: 10,

  /**
   * Maximum number of idle connections to keep in the pool, default is `connectionLimit`.
   */
  maxIdle: 10,

  /**
   * The maximum time an idle connection will remain in the pool, in milliseconds.
   */
  idleTimeout: 60000,

  /**
   * The maximum number of connection requests the pool will queue, 0 for no limit.
   */
  queueLimit: 0,

  /**
   * If true, uses TCP Keep-Alive on idle connections, preventing them from being closed.
   */
  enableKeepAlive: true,

  /**
   * The initial delay for TCP Keep-Alive, in milliseconds.
   */
  keepAliveInitialDelay: 0,
});

module.exports = pool;
