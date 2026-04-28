import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entities/user.entity';

@Injectable()
export class UsersRepository {

  constructor(
    @InjectRepository(User)
    private readonly repo: Repository<User>,
  ) {}

  create(user: Partial<User>) {
    return this.repo.save(user);
  }

  findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  async findAll() {
    return this.repo.find({
      select: ['id', 'nombre', 'email', 'telefono', 'documento', 'rol', 'createdAt']
    });
  }

  async findOne(id: number) {
    return this.repo.findOne({
      where: { id },
      select: ['id', 'nombre', 'email', 'telefono', 'documento', 'rol', 'createdAt']
    });
  }

  async update(id: number, data: Partial<User>) {
  await this.repo.update(id, data);

  return this.repo.findOne({
    where: { id },
    select: [
      'id',
      'nombre',
      'email',
      'telefono',
      'documento',
      'rol',
      'createdAt',
    ],
  });
  }

}