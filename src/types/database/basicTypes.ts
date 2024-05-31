import { ObjectId } from "mongodb";

export interface standardMongoTypes {
  _id: ObjectId;
  created_at: Date;
  modified_at: Date;
}
