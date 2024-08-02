import { Repository } from 'typeorm';
import { Game } from '../entity/game.entity';
import { InjectRepository } from '@nestjs/typeorm';

export class GameService {
  constructor(
    @InjectRepository(Game) private readonly gameRepository: Repository<Game>,
  ) {}

  async create(game: Game): Promise<Game> {
    return await this.gameRepository.save(game);
  }

  async findAll(): Promise<Game[]> {
    return await this.gameRepository.find();
  }
}
