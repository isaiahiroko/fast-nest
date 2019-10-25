
import { Repository, Like, InsertResult } from 'typeorm';

import { Observable, from, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { CommonEntity } from './common.entity';

export abstract class CommonService<E extends CommonEntity> {

    constructor(
        protected repository: Repository<E>,
        protected entity: E,
    ) { }

    create(entity: E): Observable<InsertResult> {
        return of(null)
    }

    readMany(query?: any): Observable<E[]> {
        let options = {}
        if (query) {
            for (const key in query) {
                const value = query[key]
                if (value != null) {
                    if (key == 'q') {
                        let likeQ = []
                        for (const entityKey in this.repository.metadata.propertiesMap) {
                            if(!['price'].includes(entityKey)){
                                likeQ = [ ...likeQ, { [entityKey]: Like(`%${value}%`) }]
                            }
                        }
                        options['where'] = likeQ
                    }
                    else{
                        try {
                            options[key] = JSON.parse(value)
                        } catch (error) {
                            options[key] = value
                        }
                    }
                }
            }
        }
        console.log({ query, o: options['where'] })
        return from(this.repository.find(options));
    }

    readOne(id: string): Observable<E> {
        return from(this.repository.findOne(id));
    }

    update(id: string, entity: E): Observable<any> {
        console.log({ entity })
        return this.readOne(id).pipe(
            map((oldEntity) => {
                for (const key in entity) {
                    if (entity.hasOwnProperty(key)) {
                        const element = entity[key];
                        oldEntity[key] = element
                    }
                }
                console.log({ oldEntity })
                return oldEntity
            }),
            mergeMap((newEntity) => {
                console.log({ newEntity })

                return from(this.repository.manager.save(newEntity))
            })
        )

        // return from(this.repository.manager.update<E>(entity, id));
    }

    delete(id: string): Observable<boolean> {
        return from(this.repository.delete(id)).pipe(
            map((deleteResult) => {
                return !!deleteResult.affected
            }),
        );
    }

}
