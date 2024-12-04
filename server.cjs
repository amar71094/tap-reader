// This is a CommonJS wrapper to load your ES Module
import('./src/main.mjs')
  .then((module) => {
    // Your module is loaded and can be used here
    console.log('Module loaded successfully',module);
  })
  .catch((err) => {
    console.error('Error loading module:', err);
  }); 