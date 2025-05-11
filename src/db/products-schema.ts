import {
  boolean,
  doublePrecision,
  integer,
  pgTable,
  text,
  varchar,
} from "drizzle-orm/pg-core";

export const productsSchema = pgTable("products", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: text(),
  image: varchar({ length: 255 }),
  price: doublePrecision().notNull(),
  quantity: integer().default(0),
  isAvailable: boolean().default(true),
});
