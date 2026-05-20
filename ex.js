import sqlite3 from 'sqlite3';

console.log("Hello world");

function main() {
  let p = Promise.resolve();
  for (let i = 0; i < 100; i++){
    p = p.then(() => {return insertOne();});
    p = p.then(() => printCount() );
  }
  p.then (() => db.close());
}
main();

function insertOne() {
  return new Promise((resolve, reject) => {
    db.run('insert into numbers(number) values(1)', (err) => {
      if (err) 
        reject(err);
      else 
        resolve('Done');
    })
  })
}

function PrintCount() {
  return new Promise((resolve, reject) => {
    db.all('select count(*) as tot from numbers', (err, rows) => {
      if(err)
        reject(err)
      else {
        console.log(rows[0].tot);
        resolve(rows[0].tot);
      }
    })
  })
}