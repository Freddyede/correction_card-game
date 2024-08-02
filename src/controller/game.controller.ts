import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from '../service/game.service';
import { Game } from '../entity/game.entity';

@Controller('/game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('/')
  async create(@Body() game: Game): Promise<Game> {
    return await this.gameService.create(game);
  }

  @Get('/')
  async findAll(): Promise<Game[]> {
    return await this.gameService.findAll();
  }
}
