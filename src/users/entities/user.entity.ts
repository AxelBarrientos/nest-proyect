import { AutoMap } from '@automapper/classes';

export class UserEntity {
    @AutoMap()
    id: number

    @AutoMap()
    name: string

    @AutoMap()
    email: string

    @AutoMap(() => Date)
    createdAt: Date

    @AutoMap(() => Date)
    updatedAt: Date

    constructor(user: Partial<UserEntity>) {
        Object.assign(this, user)
    }
}   