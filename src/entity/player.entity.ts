import { Game } from './game.entity';
import { Card } from './card.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Game, (game) => game.players)
  game: Game;

  @OneToMany(() => Card, (card) => card.player)
  cards: Card[];
}
