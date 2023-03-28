export class Product {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public price: Array<number>,
        public imageUrl: string,
        public likes: number,
        public plubicationDate: Date,
        public isLiked: boolean,
        public size?: Array<string>){
    }
}