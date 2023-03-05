import { FolderDto } from "./folder";

export interface NoteDto {
  guid?: string;
  subject?: string;
  content?: string;
  noteType?: NoteType;
};

export interface NoteDetailsDto extends NoteDto {
  folder: FolderDto | undefined;
  tags: any;  //TODO implement tags
};

export interface CreateNoteRequest {
	subject: String;
	content: String;
	noteType?: NoteType;
	folderId?: number;
};

export enum NoteType {
  "MEMO",
	"NOTE",
	"TASK"
};
