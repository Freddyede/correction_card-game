import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Game } from './game.entity';
import { Player } from './player.entity';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  suit: string;

  @Column()
  rank: string;

  @ManyToOne(() => Game, (game: Game) => game.cards)
  game: Game;

  @ManyToOne(() => Player, (player: Player) => player.cards)
  player: Player;
}
