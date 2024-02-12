export interface IObj {
  [key: string]: any;
}
export interface IDictItem {
  id: number;
  pid: number;
  name: string;
  key: string;
  children?: IDictItem[];
}
export type TFilterType = "dict" | "keyword" | "rangeNumber" | "classification";
export interface IColumn extends IObj {
  dataIndex: string;
  title: string;
  filter?: {
    type: TFilterType;
    dict?: string;
    options?: { label: string; value: string }[];
  };
}

export interface options {
  label: string;
  value: string;
}

export interface IListColumn extends IObj {
  dataIndex: string;
  title: string;
  type?:string
}
export interface ICell {
  record:{

  }
}