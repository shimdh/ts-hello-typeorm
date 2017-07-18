import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Entity()
export class Post {

    @PrimaryColumn("integer", { generated: true })
    public id: number;

    @Column()
    public title: string;

    @Column()
    public text: string;

    @Column("int", { nullable: false })
    public likesCount: number;
}
