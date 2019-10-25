
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, InsertResult } from 'typeorm';

import { User } from './user.entity';
import { Observable, from } from 'rxjs';
import { CommonService } from '../../common/common.service';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class UserService extends CommonService<User> {

    constructor(
        @InjectRepository(User)
        protected readonly userRepository: Repository<User>,
    ) { 
        super(userRepository, new User())
    }

    create(entity: User): Observable<User> {
        return from(this.repository.insert(entity)).pipe(
            mergeMap((insertedResult) => {
                return this.readOne(insertedResult.identifiers[0]['id'])
            })
        )
    }
}
