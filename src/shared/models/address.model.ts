import { JsonProperty } from "@roit/roit-model-mapper";

export class Address {
  @JsonProperty("cep")
  cep: string = undefined
  @JsonProperty("logradouro")
  logradouro: string = undefined
  @JsonProperty("complemento")
  complemento: string = undefined
  @JsonProperty("bairro")
  bairro: string = undefined
  @JsonProperty("localidade")
  localidade: string = undefined
  @JsonProperty("uf")
  uf: string = undefined
  @JsonProperty("ibge")
  ibge: string = undefined
  @JsonProperty("gia")
  gia: string = undefined
  @JsonProperty("ddd")
  ddd: string = undefined
  @JsonProperty("siafi")
  siafi: string = undefined
}