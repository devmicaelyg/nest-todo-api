import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
  @ApiProperty()
  name: string;
 
  @ApiProperty()
  complete: boolean;
}
