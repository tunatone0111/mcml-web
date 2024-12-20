export interface PublicationLink {
    type: string;
    url: string;
    icon: string;
}

export interface Publication {
    title: string;
    authors: string[];
    venue: string;
    details: string;
    links: PublicationLink[];
}

export interface YearlyPublications {
    journal?: Publication[];
    conference?: Publication[];
    book?: Publication[];
    bookChapter?: Publication[];
}

export interface PublicationData {
    [year: string]: YearlyPublications;
}