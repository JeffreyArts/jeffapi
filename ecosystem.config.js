require('dotenv').config();

module.exports = {
  apps: [{
    name: 'jeffa-api',
    script: 'npm',
    args: 'start',
    cwd: process.env.DEPLOYMENT_CWD,
    env: {
      NODE_ENV: 'production'
    }
  }],

  deploy: {
    production: {
      user: process.env.DEPLOYMENT_USER,
      host: process.env.DEPLOYMENT_HOST,
      ref: 'origin/main',
      repo: 'git@github.com:JeffreyArts/jeffa.git',
      path: process.env.DEPLOYMENT_PATH,
      'post-deploy': 'npm install && npm build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
