export class UserEntity {
    id: number
    name: string
    email: string
    createdAt: Date
    updatedAt: Date

    constructor(user: Partial<UserEntity>) {
        Object.assign(this, user)
    }
}   