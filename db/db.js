var mongoose = require('mongoose');

exports.conexion = () => {
    mongoose.connect('mongodb+srv://laura_erazo:root@cluster0-pbv0n.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true,       useCreateIndex: true,       useFindAndModify: false,       useUnifiedTopology: true })
        .then(() => console.log("DB connection successful!")).catch(error => { console.log(error); });
}