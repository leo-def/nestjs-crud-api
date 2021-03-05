import { Controller, Get, Post, Put, Param, Query, Delete, Body } from '@nestjs/common';
import { PaginationDTO } from 'src/core/dtos/pagination/pagination.dto';
import { User } from 'src/shared/models/user.model';
import { SaveUserDTO } from 'src/user/dtos/save-user.dto';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() saveUserDTO: SaveUserDTO): Promise<User>  {
    return this.userService.save(saveUserDTO)
  }

  @Get()
  async findAll(@Query() pagination: PaginationDTO) {
    return this.userService.fetch(pagination)
  }

  
  @Post('fetch')
  async fetch(@Body() pagination: PaginationDTO) {
    return this.userService.fetch(pagination)
  }


  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.find(id)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() saveUserDTO: SaveUserDTO): Promise<User>  {
    return this.userService.save(saveUserDTO, id)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(id)
  }

}
