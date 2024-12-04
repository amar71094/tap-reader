module.exports = {
  apps: [{
    name: "trac-core",
    script: "./server.cjs",
    env: {
      NODE_ENV: "prod"
    }
  }]
} 