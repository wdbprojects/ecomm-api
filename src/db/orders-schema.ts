import { integer, pgTable } from "drizzle-orm/pg-core";

export const ordersSchema = pgTable("orders", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  product_id: integer().notNull(),
});
