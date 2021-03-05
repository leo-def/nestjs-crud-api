import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Environment } from 'roit-environment'
import { ModelMapper } from "@roit/roit-model-mapper";
import { ByCepReponse } from 'src/core/dtos/address/by-cep.response';

@Injectable()
export class AddressService {
    constructor(private httpService: HttpService) {}
     
    async byCep(cep: string): Promise<ByCepReponse> {
      return await this.httpService.get(`${
          Environment.getProperty("address.api")
          }/ws/${cep}/json/`)
          .pipe(
              map(response => ModelMapper.deserialize(ByCepReponse, response.data)),
            ).toPromise()
    }
}
