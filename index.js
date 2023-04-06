// wir importieren unsere Table klasse
const Table = require('./src/Table');

//wir erstellen unsere Spalten
const columns = [
    {
        key: 'id',
        title: '#',
        width: 10
    },
    {
        key: 'name',
        title: 'Name',
        width: 25
    },
    {
        key: 'group',
        title: 'Gruppe',
        width: 15
    },
    {
        key: 'role',
        title: 'Rolle',
        width: '50'
    }

];


//wir erstellen unsere rows:
const rows =
    [
        {
            id: 1,
            name: 'Jana',
            group: 'Klasse',
            role: 'Schüler',
        },
        {
            id: 2,
            name: 'Benni',
            group: 'Klasse',
            role: 'Schüler',
        },
        {
            id: 3,
            name: 'Paul',
            group: 'Managemant',
            role: 'ClassMananger',
        },
        {
            id: 4,
            name: 'Mandy',
            group: 'Klasse',
            role: 'Assistant',
        }
    ];



//wir erstellen eine instanz von Table
const table = new Table({
    title: "Unsere Tabelle",
   // width: 100,
    columns,   //schlüssel reicht als deklaration
    rows,
});

//wir erwarten, dass die tableklasse ausgegeben wird
//console.log(table);

//breite des terminals 
//console.log(process.stdout.columns)


//wir erwarten, dass der titel in der mitte ausgegeben wird
//console.log(table.createTitle());

//wir erwarten, das uns eine spalte ausgegeben wird
//console.log(table.createColumn("Hallo Welt", 25));
//console.log(table.createColumn("Hallo",10));
//onsole.log(table.createColumn("GutenMorgen!",20));

//wir erwarten, dass uns eine ganze zeile ausgegeben wird
//console.log(table.createRow(rows[0]));

//console.log("=".repeat(process.stdout.columns));



table.showTable();

table.title = 'blub';