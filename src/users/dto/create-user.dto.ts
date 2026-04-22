import { IsEmail, IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {

    @IsNotEmpty()
    nombre!: string;

    @IsEmail()
    email!: string;

    @IsOptional()
    documento!: string;

    @MinLength(4)
    password!: string;

    @IsEnum(UserRole)
    rol!: UserRole;
}