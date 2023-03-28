import {Injectable} from '@angular/core';
import {Product} from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    products: Product[] = [
        new Product(
            1,
            'Kuromi Plush',
            'Plush of Kuromi, leader of a biker gang known as \"Kuromi\'s 5\".',
            [47.95, 59.99],
            'https://cdn.shopify.com/s/files/1/0568/2298/8958/products/Kuromi-Plush-_Standard_-M-Japan-Figure-4550337050316-0_592x592.jpg?v=1634268901',
            0,
            new Date(2023, 3, 16),
            false,
            ["Petit","Grand"]
        ),
        new Product(
            2,
            'Hello Kitty Plush',
            'Plush of Hello kitty, also known as \"Kitty White\".',
            [32.95, 44.99],
            'https://cdn.shopify.com/s/files/1/0568/2298/8958/products/Hello-Kitty-Plush-Toy-_Standard_-S-Japan-Figure-4901610504161-0_592x592.jpg?v=1634268404',
            0,
            new Date(2023, 3, 17),
            false,
            ["Petit","Grand"]
        )
    ];

    getOneProduct(id: number): Product {
        const product = this.products.find((product) => product.id === id);
        if (!product) {
            throw new Error(`Product with id ${id} not found.`);
        }
        return product;
    }

    getAllProducts(): Product[] {
        return this.products;
    }

    onLikeProduct(product: Product): void {
        if (product.isLiked){
            product.likes--;
        }
        else {
            product.likes++;
        }
        product.isLiked =!product.isLiked;
    }
}