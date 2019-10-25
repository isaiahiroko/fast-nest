
import { Entity, Column } from 'typeorm';
import { CommonEntity } from '../../common/common.entity';

@Entity({
    name: 'users'
})
export class User extends CommonEntity {

    @Column({ length: 52 })
    firstName: string;

    @Column({ length: 52 })
    midName: string;

    @Column({ length: 52 })
    lastName: string;

    @Column({ length: 104 })
    email: string;

    @Column({ length: 104, select: false })
    password: string;

}
