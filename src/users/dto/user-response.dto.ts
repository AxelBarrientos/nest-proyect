import { AutoMap } from '@automapper/classes';

export class UserResponseDto
{
    @AutoMap()
    id: number;

    @AutoMap()
    email: string;

    @AutoMap()
    name: string;
}