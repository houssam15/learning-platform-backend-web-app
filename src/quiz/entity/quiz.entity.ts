import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Question, (question) => question.quiz, { cascade: true })
  questions: Question[];
}