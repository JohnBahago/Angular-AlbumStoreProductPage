
import { Track } from "./track"; 

export interface Album {
    name: string;
    releaseDate:string;
    CoverImage: string;
    tracks: Track[];
}
