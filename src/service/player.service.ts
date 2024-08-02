import { InjectRepository } from '@nestjs/typeorm';
import { Player } from '../entity/player.entity';
import { Repository } from 'typeorm';
import { Game } from '../entity/game.entity';
import { Card } from '../entity/card.entity';

export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
    @InjectRepository(Game)
    private readonly gameRepository: Repository<Game>,
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async create(player: Player): Promise<Player> {
    return await this.playerRepository.save(player);
  }

  async findAll(): Promise<Player[]> {
    return await this.playerRepository.find({
      relations: { game: true },
    });
  }

  async addCard(playerId: number, cardId: number): Promise<Player> {
    const player = await this.playerRepository.findOneBy({ id: playerId });
    const card = await this.cardRepository.findOneBy({ id: cardId });

    if (!player) throw new Error('PlayerID not found');
    if (!card) throw new Error('CardID not found');

    player.cards.push(card);
    return await this.playerRepository.save(player);
  }

  async addGame(playerID: number, gameID: number): Promise<Player> {
    const player = await this.playerRepository.findOneBy({ id: playerID });
    const game = await this.gameRepository.findOneBy({ id: gameID });

    if (!player) throw new Error('PlayerID not found');
    if (!game) throw new Error('GameID not found');

    player.game = game;
    return await this.playerRepository.save(player);
  }

  async remove(playerID: number): Promise<void> {
    const player = await this.playerRepository.findOneBy({ id: playerID });
    if (!player) throw new Error('PlayerID not found');
    await this.playerRepository.remove(player);
  }
}
