import { Injectable } from "@nestjs/common";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { createMap } from "@automapper/core";
import type { Mapper, MappingProfile } from "@automapper/core";
import { UserResponseDto} from '../dto/user-response.dto';
import { UserEntity } from "../entities/user.entity";


@Injectable()
export class UserProfile extends AutomapperProfile{
    constructor(@InjectMapper() mapper: Mapper){
        super(mapper);

    }
    get profile(){
        return (mapper: Mapper) => {
            createMap(mapper, UserEntity, UserResponseDto);

        };
    }
}

       