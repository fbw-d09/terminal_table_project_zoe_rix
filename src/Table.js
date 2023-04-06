// wir schreiben ein Programm zum anzeigen von tabellen in der konsole.

// wir benötigen eine klasse, die die komplette aplikation beinhaltet.

/**
 * @class Table
 * @desciption ein programm zum erstellen von tabellen in der konsole
 * @example
 * const table = new Table();
 */
class Table {
    // wir nennen die klassse Table, da wir eine tabelle damit erstellen wollen, und das der sinnvollste name ist (laut konvention) ist.

    tableTitle;
    tableWidth;
    tableColumns;
    tableRows;

    /**
     * @constructor
     */
    constructor({ title, width, columns, rows } = {}) {


        // die klasse sollte ein konfigurationsobjekt in den constructor bekommen, um dynamisch einstellbar zu sein.
        //wir bracuhen eine property die den namen der tabelle angibt, denn wir wollen, über der tabelle den namen der tabelle stehen haben.
        //wir brauchen eine property die die breite der tabelle angibt, der default wert sollte die breite der konsole sein.
        //wir brauchen eine property die alle columns der tabelle, und dessen werte beinhaltet.
        //wir brauchen eine property die alle rows der Tabelle, und dessen werte beinhaltet.
        this.tableTitle = title || "Default Table";
        this.tableWidth = width || process.stdout.columns;
        this.tableColumns = columns || [];
        this.tableRows = rows || [];
    }


    //die klasse sollte getter und setter haben, umd iese einstellungen gegebenenfalls ändern zu können
    //wir brauchen getter/stter für den tabellen titel
    // wir brauchen getter/setter für die tabellenbreite
    // wir brauchen getter/setter für die columns
    //wir brauchen getter/setter für die rows

    //getTitle = () => this.tableTitle;
    //getWidth = () => this.tableWidth;
    //getColumns = () => this.tableColumns;
    //getRow = () => this.row;

    get title() { return this.tableTitle }
    get width() { return this.tableWidth }
    get columns() { return this.tableColumns }
    get rows() { return this.tableRows }

    set title(input) { this.tableTitle = input }
    set width(input) { this.tableWidth = input }
    set columns(input) { this.tableColumns = input }
    set rows(input) { this.tableRows = input }

    // die klasse sollte methoden haben um einige berechnungen zu machen 
    //wir brauchen eine methode, die den titel anzeigt und dafür sorgt, dass dieser 
    //horizontal zentriert über der tabelle steht.

    /**
     * @method createTitle
     * @desciption erstellt den zentrierten titel über der tabelle
     * @returns { string }
     */

    createTitle = () => {
        const padding = Math.round((this.width - this.title.length) / 2);
        // wir erwarten das padding eine zahl ausgibt, diese zahl sollte die hälfte 
        // console.log(padding);
        return `\n${' '.repeat(padding)}${this.title}${' '.repeat(padding)}`
    }
    //wir brauchen eine methode, die eine spalte erstellt

    /**
     * @method createColumn
     * @description erstellt eine spalte in der angegebenen breite, mit dem text, der in dieser spalte stehen soll
     * @param {string} text 
     * @param {number} width
     *  @returns {string}
     */

    createColumn = (text, width) => {
        //wir erstellen eine berechnung um die spaltenbreite dadurch zu bekommen, das wir die angegebene spaltenbreite minus dem inhalt der spalte rechnen
        const columnWidth = width - text.toString().length || 20;
        // console.log(columnWidth);

        //AAAAAAAAAAAAAAAAAAAAAAAAA = width
        //AAAAAAAAAAAAAAAAAAA = width - textlänge
        //AAAAAAAAAAAAA = width - textlänge -3
        // HALLO WELT = text
        // HALLO WELT AAAAAA | = ergebnis
        return ' ' + text.toString() + ' '.repeat(columnWidth - 3) + '|';


    }

    //wir brauchen eine methode, die eine zeile erstellt, unbd die jeweiligen spalten dort einfügt

    /**
     * @method createRox
     * @description erstellt eine zeile die für die jeweiligen spalten nacheinander darstellt
     * @param {object} rows
     * @returns {string}
     */

    createRow = (rows) => {

        //wir erstellen eine variable, in die wir die inhalte der zeile speichern und beginnen sie mit der linken pipe.
        let tempString = '|';
        //wir erstellen eine variable, in der wir die breite der tabelle speichern
        // let width = this.width;

        for (let row in rows) {
            //row = schlüssel
            //rows = die sammlung
            //rows[row] = schlüssel von sammlung = value
            let width = this.width;

            this.columns.forEach((column, i) => {
                if (column.key === row) {
                    //console.log(column);

                    //die ersten spalten
                    if (this.columns.length === i + 1) {
                        tempString += this.createColumn(rows[row], width + 2);
                    }
                    else {
                        tempString += this.createColumn(rows[row], column.width)
                    }
                }
                width -= column.width;
            });
        }
        return tempString;
    }

    //wir brauchen eine methode, die den tabellen header erstellt, also die schlüssel über dem spalteninhalt

    /**
     * @method createHeader
     * @description estellt den header
     * @returns {string}
     */
    createHeader = () => {
        let tempString = '|';
        let width = this.width;

        this.columns.forEach((column, i) => 
        {
            if (this.columns.length === i + 1) 
            {
                tempString += this.createColumn(column.title, width + 2);
            }
            else 
            {
                tempString += this.createColumn(column.title, column.width);
            }
            width -= column.width;
        });
        return tempString;
    }



    //wir brauchen eine methode, die den divider erstellt
    /**
     * @method createDivider
     * @description erstellt den divider, mit den definieren längen der spalten
     * @returns {string}
     */
    createDivider = () => {
        let tempString = '|';
        let width = this.width;

        this.columns.forEach((column, i) => {
            if (this.columns.length === i + 1) {
                tempString += '-'.repeat(width) + '|';
            }
            else {
                tempString += '-'.repeat(column.width - 2) + '|';
            }

            width -= column.width;
        });
        return tempString;
    }

    /** 
         * @method showTable
         * @desciption fügt alles zusammen und gibt es im terminal aus
         */

    showTable = () => {

        console.log(this.createTitle());

        console.log(this.createHeader());

        console.log(this.createDivider());

        this.rows.forEach((row, i) => {
            console.log(this.createRow(row));
        });

    }
}



//wir brauchen eine methode, die die tabelle anzeigt



// wir müssen die klasse exportieren, um an ihre inhalte zu kommen, um das programm zu starten


module.exports = Table;
