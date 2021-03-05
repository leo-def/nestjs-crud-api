import { JsonProperty } from "@roit/roit-model-mapper";

export class PaginationDTO {
  @JsonProperty("limit")
  limit: number = undefined;

  @JsonProperty("offset")
  offset: number = undefined;

  @JsonProperty("total")
  total: number = undefined;
}
