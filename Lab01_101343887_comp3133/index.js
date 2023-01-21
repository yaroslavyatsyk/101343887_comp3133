const csv = require('csv-parser');
const fs = require('fs');

console.log("Removing canada.txt file if exists");
if (fs.existsSync('canada.txt')) {
    fs.unlinkSync('canada.txt');
    console.log('canada.txt is deleted');
}

console.log("Removing usa.txt file if exists");
if (fs.existsSync('usa.txt')) {
    fs.unlinkSync('usa.txt');
    console.log('usa.txt file is deleted');
}

fs.appendFileSync('canada.txt', `country,year,population\n`);
fs.appendFileSync('usa.txt', `country,year,population\n`);

fs.createReadStream('input_countries.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(row)


    if(row.country == 'Canada') {
        fs.appendFileSync('canada.txt',`${row.country},${row.year},${row.population}\n`)
    }
    if(row.country == 'United States') {
      fs.appendFileSync('usa.txt',`${row.country},${row.year},${row.population}\n`)
    }
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

  