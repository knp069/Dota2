import { Ability } from './ability';
import { Item } from './item';

export class Hero {
    AttackAcquisitionRange: number;
    AttackDamageType: string;
    HeroID: number;
    abilities: Ability[];
    abilitylayout: number;
    armorphysical: number;
    attackdamagemax: number;
    attackdamagemin: number;
    attackpoint: number;
    attackrange: number;
    attackrate: number;
    attacktype: number;
    attributeagilitygain: number;
    attributebaseagility: number;
    attributebaseintelligence: number;
    attributebasestrength: number;
    attributeintelligencegain: number;
    attributeprimary: string;
    attributestrengthgain: number;
    displayname: string;
    items: Item[];
    level: number;
    magicalresistance: number;
    movementspeed: number;
    movementturnrate: number;
    name: string;
    projectilespeed: number;
    role: string;
    statushealth: number;
    statushealthregen: number;
    statusmana: number;
    statusmanaregen: number;
    talents: Ability[];
    team: string;
    visiondaytimerange: number;
    visionnighttimerange: number;
}
