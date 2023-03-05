export interface DialogResponse {
  operation: DialogResponseOperation;
  res: boolean;
  data?: any;
}

export enum DialogResponseOperation {
  "CREATE_NOTE",
  "DELETE_NOTE",
  "CREATE_FOLDER"
};
