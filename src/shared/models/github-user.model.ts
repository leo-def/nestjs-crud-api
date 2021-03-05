import {JsonProperty } from "@roit/roit-model-mapper";

export class GithubUser {
  @JsonProperty("login")
  login: string = undefined;
  @JsonProperty("id")
  id: number = undefined;
  @JsonProperty("nodeId")
  nodeId: string = undefined;
  @JsonProperty("avatarUrl")
  avatarUrl: string = undefined;
  @JsonProperty("gravatarId")
  gravatarId: string = undefined;
  @JsonProperty("url")
  url: string = undefined;
  @JsonProperty("htmlUrl")
  htmlUrl: string = undefined;
  @JsonProperty("followersUrl")
  followersUrl: string = undefined;
  @JsonProperty("followingUrl")
  followingUrl: string = undefined;
  @JsonProperty("gistsUrl")
  gistsUrl: string = undefined;
  @JsonProperty("starredUrl")
  starredUrl: string = undefined;
  @JsonProperty("subscriptionsUrl")
  subscriptionsUrl: string = undefined;
  @JsonProperty("organizationsUrl")
  organizationsUrl: string = undefined;
  @JsonProperty("reposUrl")
  reposUrl: string = undefined;
  @JsonProperty("eventsUrl")
  eventsUrl: string = undefined;
  @JsonProperty("receivedEventsUrl")
  receivedEventsUrl: string = undefined;
  @JsonProperty("type")
  type: string = undefined;
  @JsonProperty("siteAdmin")
  siteAdmin: boolean = undefined;
  @JsonProperty("score")
  score: number = undefined;
}