export type Mission = {
  name: string;
}[];

export type Ship = {
  active?: boolean;
  name: string;
  missions: Mission;
}[];
