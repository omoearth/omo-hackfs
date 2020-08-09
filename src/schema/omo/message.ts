import {JSONSchema} from "@textile/threads-database";
import {ModelQuant} from "../../../textile-graphql/src/data/modelQuant";

export const Message: JSONSchema = {
  $id: "https://example.com/message.schema.json",
  $schema: "http://json-schema.org/draft-07/schema#",
  _$schemaId: "schema:omo.message",
  title: "message",
  type: "object",
  required: ["_id"],
  definitions: ModelQuant.definitons,
  properties: {
    _id: {
      type: "string",
    },
    name: {
      type: "string",
    },
    text: {
      type: "string",
    },
    date: {
      type: "string"
    }
  },
};