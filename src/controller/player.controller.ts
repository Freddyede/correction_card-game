import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PlayerService } from '../service/player.service';
import { Player } from '../entity/player.entity';

@Controller('/player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post('/')
  async create(@Body() player: Player) {
    return await this.playerService.create(player);
  }

  @Get()
  async findAll(): Promise<Player[]> {
    return await this.playerService.findAll();
  }

  @Put('/:playerID/game/:gameID')
  async addGame(
    @Param('playerID') playerID: number,
    @Param('gameID') gameID: number,
  ) {
    try {
      return await this.playerService.addGame(playerID, gameID);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
  @Put('/:playerID/card/:cardID')
  async addCard(
    @Param('playerID') playerID: number,
    @Param('cardID') cardID: number,
  ) {
    try {
      return await this.playerService.addCard(playerID, cardID);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Delete('/:playerID')
  async removeById(@Param('playerID') playerID: number) {
    try {
      await this.playerService.remove(playerID);
      return {
        message: `Player '${playerID}' removed successfully.`,
      };
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
