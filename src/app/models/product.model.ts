export class Product {
    constructor(
        public title: String,
        public description: String,
        public price: Array<number>,
        public imageUrl: String,
        public likes: number,
        public isLiked: boolean,
        public size?: Array<string>){
    }
}