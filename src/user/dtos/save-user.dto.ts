import { JsonProperty } from '@roit/roit-model-mapper';

export class SaveUserDTO {
  @JsonProperty("name")
  name: string = undefined;
  // Trocar por birth - LGPD
  @JsonProperty("age")
  age: number = undefined;
  @JsonProperty("github")
  github: string = undefined;
  @JsonProperty("cep")
  cep: string = undefined;
}