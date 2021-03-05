import { HttpService, Injectable } from '@nestjs/common';
import { tap, map } from 'rxjs/operators';
import { Environment } from 'roit-environment'
import { ModelMapper } from "@roit/roit-model-mapper";
import { FindProfileReponse } from 'src/core/dtos/github/find-profile.response';
import { ProfileDTO } from 'src/core/dtos/github/profile.dto';

@Injectable()
export class GithubService {
    constructor(private httpService: HttpService) {}
    
    async findProfile(githubUser: string): Promise<ProfileDTO> {
        return await this.httpService.get(`${
            Environment.getProperty("github.api") 
        }/search/users?q=${githubUser}`)
        .pipe(
            map(response => response.data),
            map(data => data && data.items && data.total_count > 0 ? data.items[0] : null),
            map(data => data ? ModelMapper.deserialize(ProfileDTO, data) : null)
        ).toPromise();
    }
}
