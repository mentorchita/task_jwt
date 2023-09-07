import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Product = db.define('product', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Product;

( async() => {
    await db.sync();
})();
