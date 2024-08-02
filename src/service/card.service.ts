import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from '../entity/card.entity';

export class CardService {
  constructor(
    @InjectRepository(Card) private readonly cardRepository: Repository<Card>,
  ) {}

  async create(card: Card): Promise<Card> {
    return await this.cardRepository.save(card);
  }

  async findAll(): Promise<Card[]> {
    return await this.cardRepository.find({
      relations: ['player', 'game'],
    });
  }
}
