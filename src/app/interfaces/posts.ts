export class Posts {
    title: string;
    pubDate: string;
    link: string;
    imageLink: string;

    constructor(title: string, pubDate: string, link: string, imageLink: string) {
        this.title = title;
        this.pubDate = pubDate;
        this.link = link;
        this.imageLink = imageLink;
    }
}
