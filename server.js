const express = require('express');
const app = express();
const port = 3001;// where JSON will be stored!

app.get('/api/testJSON', (req, res) => {
  const mainData = [
    {info: 'Casey Hald'},
    {info: '@caseyhald'}
  ];
  res.json(mainData);
});

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log("Server started! "+port+", Web URL: http://localhost:"+port);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`
  _~
c|_|  Now grab a cup of coffee & start ./client! (npm start)

( •_•)
( •_•)>⌐■-■
(⌐■_■)

`);
console.log("Remember, keep this terminal open!");
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`~~~~~~~~~~~~~~~~~`);


app.listen(port, () => `Server running on port ${port}`);
