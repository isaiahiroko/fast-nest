import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class CommonEntity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 26 })
    status: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ type: 'datetime', default: null })
    deletedAt: Date;

}
