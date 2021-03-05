import { JsonProperty } from "@roit/roit-model-mapper";
import { ProfileDTO } from "./profile.dto";

export class FindProfileReponse {
  @JsonProperty("total_count")
  totalCount: number = undefined;
  @JsonProperty("incomplete_results")
  incompleteResults: boolean = undefined;
  // @JsonProperty({name: "items", clazz: ProfileDTO, alwaysArray: true})
  items: Array<ProfileDTO>
}