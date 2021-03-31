import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('User')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 45, nullable: false})
    @ApiProperty({type: 'varchar', description: 'name'})
    name: string;

    @Column({ type: 'int',  precision: 8, default: 0, nullable: false})
    @ApiProperty({type: 'int', description: 'age'})
    age: string;

    @CreateDateColumn({ type: 'datetime' })
    @ApiProperty({type: 'string', description: 'Date in fortmat yyyy-mm-dd'})
    date: Date;

    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'datetime' })
    updatedAt: Date;
}
