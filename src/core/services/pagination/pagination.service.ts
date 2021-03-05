import { Injectable } from '@nestjs/common';
import { PaginationDTO } from 'src/core/dtos/pagination/pagination.dto';
import { PaginationResponse } from 'src/core/dtos/pagination/pagination.response';

@Injectable()
export class PaginationService {
    static paginate<T>(pagination: PaginationDTO, items: Array<any>) {
        return ({
            pagination,
            items
        }) as PaginationResponse<T>
    }
    paginate<T>(pagination: PaginationDTO, items: Array<any>) {
        return PaginationService.paginate<T>(pagination, items)
    }
}
