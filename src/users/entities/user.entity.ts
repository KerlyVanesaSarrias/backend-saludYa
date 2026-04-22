import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export enum UserRole {
  PACIENTE = 'paciente',
  MEDICO = 'medico',
}

@Entity('users')
export class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 150 })
  nombre!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ length: 20, nullable: true })
  telefono!: string;

  @Column({ length: 20,nullable:true })
  documento!: string;

  @Column()
  password!: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.PACIENTE,
  })
  rol!: UserRole;

  @CreateDateColumn()
  createdAt!: Date;
}