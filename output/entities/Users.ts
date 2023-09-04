import { Column, Entity } from "typeorm";

@Entity("users", { schema: "chatty" })
export class Users {
  @Column("varchar", { primary: true, name: "id", length: 36 })
  id: string;

  @Column("varchar", { name: "display_name", length: 255 })
  displayName: string;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @Column("tinyint", { name: "subscribe_news", width: 1 })
  subscribeNews: boolean;

  @Column("int", { name: "online" })
  online: number;

  @Column("date", { name: "created_at" })
  createdAt: string;

  @Column("date", { name: "updated_at" })
  updatedAt: string;
}
