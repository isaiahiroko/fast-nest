import { Get, Query } from '@nestjs/common';
import { Put, Delete, Body, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';
import { CommonEntity } from './common.entity';

export abstract class CommonController<E extends CommonEntity> {

  constructor(protected service: CommonService<E>) { }

  @Get()
  readMany(@Query() query: any): Observable<E[]> {
    return this.service.readMany(query);
  }

  @Get(':id')
  readOne(@Param('id') id: string): Observable<E> {
    return this.service.readOne(id);
  }

  // @Post('create')
  // create(@Body() entity: E): Observable<E> {
  //   return this.service.create(entity);
  // }

  @Put(':id/update')
  update(@Param('id') id: string, @Body() entity: E): Observable<E> {
    return this.service.update(id, entity);
  }

  @Delete(':id/delete')
  delete(@Param('id') id: string): Observable<boolean> {
    return this.service.delete(id);
  }

}
