import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardService } from '../service/card.service';
import { Card } from '../entity/card.entity';

@Controller('/card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post('/')
  async create(@Body() card: Card): Promise<Card> {
    return await this.cardService.create(card);
  }

  @Get('/')
  async findAll(): Promise<Card[]> {
    return await this.cardService.findAll();
  }
}
