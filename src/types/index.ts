export type Language = 'ta' | 'en';

export type WritingCategory = 'poem' | 'story' | 'essay' | 'reflection';

export interface Writing {
  id: string;
  slug: string;
  category: WritingCategory;
  categoryTa: string;
  categoryEn: string;
  titleTa: string;
  titleEn: string;
  excerptTa: string;
  excerptEn: string;
  contentTa: string[];
  contentEn: string[];
  publishedDate: string;
  year: number;
  readingTime: string;
  featured?: boolean;
  isPoem?: boolean;
}

export interface Book {
  id: string;
  slug: string;
  titleTa: string;
  titleEn: string;
  subtitleTa?: string;
  subtitleEn?: string;
  coverImage?: string;
  coverBg?: string;
  coverAccent?: string;
  year: number;
  publisherTa: string;
  publisherEn: string;
  pages?: number;
  isbn: string;
  descriptionTa: string;
  descriptionEn: string;
  featured?: boolean;
  buyLinks: {
    labelTa: string;
    labelEn: string;
    url: string;
  }[];
  tableOfContentsTa: string[];
  tableOfContentsEn: string[];
  sampleExcerptTa: string;
  sampleExcerptEn: string;
}

export interface Award {
  id: string;
  titleTa: string;
  titleEn: string;
  organizationTa: string;
  organizationEn: string;
  year: number;
  descriptionTa: string;
  descriptionEn: string;
  citationTa?: string;
  citationEn?: string;
  imageUrl?: string;
  certificateUrl?: string;
}

export interface Publication {
  id: string;
  mediaNameTa: string;
  mediaNameEn: string;
  categoryTa: string;
  categoryEn: string;
  titleTa: string;
  titleEn: string;
  date: string;
  isSample: boolean;
  excerptTa: string;
  excerptEn: string;
}

export interface GalleryItem {
  id: string;
  titleTa: string;
  titleEn: string;
  category: 'portrait' | 'event' | 'desk' | 'launch';
  categoryTa: string;
  categoryEn: string;
  imageUrl: string;
  year: number;
  captionTa: string;
  captionEn: string;
}

export interface TimelineEntry {
  year: string;
  titleTa: string;
  titleEn: string;
  descriptionTa: string;
  descriptionEn: string;
}
