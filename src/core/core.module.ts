import { Module, HttpModule, Global } from '@nestjs/common';
import { GithubService } from './services/github/github.service';
import { AddressService } from './services/address/address.service';
import { ModelService } from './services/model/model.service';
import { PaginationService } from './services/pagination/pagination.service';

@Global()
@Module({
  imports: [HttpModule],
  providers: [GithubService, AddressService, ModelService, PaginationService],
  exports: [GithubService, AddressService, ModelService, PaginationService]
})
export class CoreModule {}
