const app = require('../app.js');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`app running at http://localhost:${PORT}`);
})

// app.listen(PORT, () => {
//   console.log(`app running at http://localhost:3000`);
// })
