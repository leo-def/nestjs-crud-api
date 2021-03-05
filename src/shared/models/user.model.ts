import { JsonProperty } from "@roit/roit-model-mapper";
import { Address } from "./address.model";
import { GithubUser } from "./github-user.model";

export class User {
  @JsonProperty("name")
  name: string = undefined;
  // Trocar por birth - LGPD
  @JsonProperty("age")
  age: number = undefined;
  @JsonProperty({ name: "githubUser", clazz: GithubUser })
  githubUser: GithubUser = undefined;
  @JsonProperty({ name: "address", clazz: Address })
  address: Address = undefined;
}
