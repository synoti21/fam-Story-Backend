import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FamilyMemberEntity } from './familymember.entity';

@Entity('user', { schema: 'family_app_db' })
export class UserEntity {
  @Column('int', { primary: true, name: 'ID' })
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column('varchar', { name: 'email', nullable: true, length: 50 })
  email: string | null;

  @Column('varchar', { name: 'user_password', nullable: true, length: 25 })
  userPassword: string | null;

  @Column('varchar', { name: 'username', nullable: true, length: 50 })
  username: string | null;

  @Column('varchar', { name: 'nickname', nullable: true, length: 50 })
  nickname: string | null;

  @Column('int', { name: 'age', nullable: true })
  age: number | null;

  @Column('int', { name: 'gender', nullable: true })
  gender: number | null;

  @OneToMany(() => FamilyMemberEntity, (familyMember) => familyMember.user)
  familyMembers: FamilyMemberEntity[];
}
