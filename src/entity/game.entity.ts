import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from './player.entity';
import { Card } from './card.entity';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Player, (player) => player.game)
  players: Array<Player>;
  @OneToMany(() => Card, (card) => card.game)
  cards: Card[];
}
