import { v4 as uuid } from "uuid";
import { Product } from "../product/entity/product";
import ProductInterface from "../product/entity/product.interface";

export default class ProductFactory {
    public static create(type: string, name: string, price: number): ProductInterface {
        switch (type) {
            case "a":
                return new Product(uuid(), name, price);
            case "b":
                return new Product(uuid(), name, price * 2);
            default:
                throw new Error("Product type not supported");
        }
    }

}