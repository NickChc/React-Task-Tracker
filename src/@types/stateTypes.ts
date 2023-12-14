export enum TTask_Type_Enum {
  SCHOOL = "school",
  WORK = "work",
}

export interface TTask {
  description: string;
  id: number | string;
  type: TTask_Type_Enum;
}
