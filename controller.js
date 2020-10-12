const model = require('./model')


exports.upsert = async function upsertRow(getarray) {
    model.tableData.upsert({
        Publiceringsdatum: getarray[0], Utgivare: getarray[1], Person: getarray[2]
        , Befattning: getarray[3], Närstående: getarray[4], Karaktär: getarray[5]
        , Instrumentnamn: getarray[6], ISIN: getarray[7]
        , Transaktionsdatum: getarray[8]
        , Volym: getarray[9], Volymsenhet: getarray[10], Pris: getarray[11], Valuta: getarray[12]
        , Handelsplats: getarray[13], Status: getarray[14]
    })
};