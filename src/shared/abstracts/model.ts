import { JsonProperty } from "@roit/roit-model-mapper";

export class Model {
  @JsonProperty("id")
  id: string = undefined
}