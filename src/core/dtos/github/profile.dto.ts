import {JsonProperty } from "@roit/roit-model-mapper";

export class ProfileDTO {
  @JsonProperty("login")
  login: string = undefined;
  @JsonProperty("id")
  id: number = undefined;
  @JsonProperty("node_id")
  nodeId: string = undefined;
  @JsonProperty("avatar_url")
  avatarUrl: string = undefined;
  @JsonProperty("gravatar_id")
  gravatarId: string = undefined;
  @JsonProperty("url")
  url: string = undefined;
  @JsonProperty("html_url")
  htmlUrl: string = undefined;
  @JsonProperty("followers_url")
  followersUrl: string = undefined;
  @JsonProperty("following_url")
  followingUrl: string = undefined;
  @JsonProperty("gists_url")
  gistsUrl: string = undefined;
  @JsonProperty("starred_url")
  starredUrl: string = undefined;
  @JsonProperty("subscriptions_url")
  subscriptionsUrl: string = undefined;
  @JsonProperty("organizations_url")
  organizationsUrl: string = undefined;
  @JsonProperty("repos_url")
  reposUrl: string = undefined;
  @JsonProperty("events_url")
  eventsUrl: string = undefined;
  @JsonProperty("received_events_url")
  receivedEventsUrl: string = undefined;
  @JsonProperty("type")
  type: string = undefined;
  @JsonProperty("site_admin")
  siteAdmin: boolean = undefined;
  @JsonProperty("score")
  score: number = undefined;
}