import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './repositories/users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

    constructor(
        private readonly usersRepository: UsersRepository,
    ) { }

    async create(dto: CreateUserDto) {
        const exists = await this.usersRepository.findByEmail(dto.email);
        if (exists) {
            throw new BadRequestException('El correo ya está registrado');
        }
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const userToSave = {
            ...dto,
            password: hashedPassword
        };
        return this.usersRepository.create(userToSave);
    }

    findAll() {
        return this.usersRepository.findAll();
    }

    async findByEmail(email: string) {
        return this.usersRepository.findByEmail(email);
    }

}
