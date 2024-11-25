import { PrimaryGeneratedColumnType } from './../../../node_modules/typeorm/driver/types/ColumnTypes.d';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number
    constructor(parameters) { }
}