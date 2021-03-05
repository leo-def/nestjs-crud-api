import { Injectable } from '@nestjs/common';
import { ModelMapper } from '@roit/roit-model-mapper';
import { AddressService } from 'src/core/services/address/address.service';
import { GithubService } from 'src/core/services/github/github.service';
import { ModelService } from 'src/core/services/model/model.service';
import { PaginationDTO } from 'src/core/dtos/pagination/pagination.dto';
import { User } from 'src/shared/models/user.model';
import { SaveUserDTO } from 'src/user/dtos/save-user.dto';
import jsonMockUser from './mock.json'
import { PaginationService } from 'src/core/services/pagination/pagination.service';
import { PaginationResponse } from 'src/core/dtos/pagination/pagination.response';

const mockUser = jsonMockUser as User

@Injectable()
export class UserService {
    constructor(
        private githubService: GithubService,
        private addressService: AddressService,
        private modelService: ModelService,
        private paginationService: PaginationService
    ) {

    }

    async loadUser(dto: SaveUserDTO, id: string = null): Promise<User> {
        const { github, cep, ...userDto } = dto
        const githubUser = await this.githubService.findProfile(github)
        const address = await this.addressService.byCep(cep)
        id = id || this.modelService.generateId()
        return ModelMapper.deserialize(User, ({
            ...userDto,
            githubUser,
            address,
            id
        }))
    }


    async save(dto: SaveUserDTO, id: string = null): Promise<User> {
        return this.loadUser(dto, id)
    }

    async remove(id: string): Promise<User> {
        return await ({
            ...mockUser,
            id
        } as User)
    }

    async find(id: string): Promise<User> {
        return await ({
            ...mockUser,
            id
        } as User)
    }

    async fetch (pagination: PaginationDTO): Promise<PaginationResponse<User>> {
        // eslint-disable-next-line prefer-spread
        const items = (Array.apply(null, Array(pagination.limit || 5)).map((id) => ({
            id,
            ...mockUser
        }) as User))
        return this.paginationService.paginate<User>(pagination, items)

    }



}
