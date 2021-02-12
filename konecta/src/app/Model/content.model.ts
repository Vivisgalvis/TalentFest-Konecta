export interface Content {
    attributes: Attributes;
    insert: string | { image: string };
}

export interface Attributes {
    color: string;
    header: number;
    indent: number;
    bold: boolean;
    list: string;
    link: string
}

export interface Article {
    title?: string;
    tag?: string[];
    content?: string;
    like?: number;
    dislike?: number;
}

