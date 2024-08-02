import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './entity/game.entity';
import { GameController } from './controller/game.controller';
import { GameService } from './service/game.service';
import { PlayerController } from './controller/player.controller';
import { Card } from './entity/card.entity';
import { Player } from './entity/player.entity';
import { PlayerService } from './service/player.service';
import { CardController } from './controller/card.controller';
import { CardService } from './service/card.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'correction_nest_tp',
      entities: [Game, Player, Card],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Game, Player, Card]),
  ],
  controllers: [GameController, PlayerController, CardController],
  providers: [GameService, PlayerService, CardService],
})
export class AppModule {}
