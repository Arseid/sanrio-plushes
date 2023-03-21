export class Product {
    constructor(
        public title: string,
        public description: string,
        public price: Array<number>,
        public imageUrl: string,
        public likes: number,
        public isLiked: boolean,
        public size?: Array<string>){
    }
}