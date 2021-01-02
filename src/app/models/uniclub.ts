import { Location } from './location'
export interface UniClub{
    clubName: string;
    clubLocation: Location;
    numOfWins: number;
    numOfDraws: number;
    numOfDefeats: number;
    points: number;
    numOfMatchPlayed: number;
    goalScored: number;
    uniName: string;
}