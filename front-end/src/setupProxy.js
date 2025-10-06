const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  // Standard: forward /api/* to backend :7001
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:7001",
      changeOrigin: true,
    })
  );

  // Fallback: if the app calls /messages (without /api), rewrite to /api/messages
  app.use(
    "/messages",
    createProxyMiddleware({
      target: "http://localhost:7001",
      changeOrigin: true,
      pathRewrite: { "^/messages": "/api/messages" },
    })
  );
};
