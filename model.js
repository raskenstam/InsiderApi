// https://dev.to/lars124/how-i-structure-my-rest-apis-11k4
// https://github.com/aionic-org/aionic-core/tree/master/src
const colors = require('colors');
const { Sequelize ,DataTypes} = require('sequelize');
// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('test', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: msg => console.log(msg.magenta)
});
async function run(){
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
run()
const tableData = sequelize.define('tableData', {
    // Model attributes are defined here
    Publiceringsdatum: {
        type: DataTypes.STRING,
    },
    Utgivare: {
        type: DataTypes.STRING,

    },
    Person: {
        type: DataTypes.STRING,

    },
    Befattning: {
        type: DataTypes.STRING,
    },
    Närstående: {
        type: DataTypes.STRING,
    },
    Karaktär: {
        type: DataTypes.STRING,
    },
    Instrumentnamn: {
        type: DataTypes.STRING,
    },
    ISIN: {
        type: DataTypes.STRING,
    },
    Transaktionsdatum: {
        type: DataTypes.STRING,
    },
    Volym: {
        type: DataTypes.STRING,
    },
    Volymsenhet: {
        type: DataTypes.STRING,
    },
    Pris: {
        type: DataTypes.STRING,
    },
    Valuta: {
        type: DataTypes.STRING,
    },
    Handelsplats: {
        type: DataTypes.STRING,
    },
    Status: {
        type: DataTypes.STRING,
    },
}, {});
tableData.sync({alter:true})
exports.tableData = tableData;