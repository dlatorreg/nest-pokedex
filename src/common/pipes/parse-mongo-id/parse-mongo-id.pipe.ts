import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    
    if ( !isValidObjectId( value ) ) {
      throw new BadRequestException( `${ value } is not a valid MongoID`);
    }
    return value;
  }
}
