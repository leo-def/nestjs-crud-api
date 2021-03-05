import { JsonProperty } from "@roit/roit-model-mapper";
import { PaginationDTO } from "./pagination.dto";

export class PaginationResponse<T> {
  @JsonProperty("pagination")
  pagination: PaginationDTO = undefined;

  @JsonProperty("items")
  items: Array<T> = [];
}
