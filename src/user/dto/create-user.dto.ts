import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    @ApiProperty({type: 'varchar', description: 'name'})
    name: string;

    @IsNumber()
    @ApiProperty({type: 'int', description: 'age'})
    age: string;

    @IsString()
    @ApiProperty({type: 'string', description: 'Date in fortmat yyyy-mm-dd'})
    date: string;
}
