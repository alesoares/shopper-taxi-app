import { PrimaryGeneratedColumnType } from 'typeorm/driver/types/ColumnTypes.js';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number
    constructor(parameters) { }
}