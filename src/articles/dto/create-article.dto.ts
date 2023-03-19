import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import lengths from 'src/utils/lengths';

export class CreateArticleDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(lengths.title.minLength)
  title: string;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsOptional()
  @IsString()
  @MaxLength(lengths.description.maxLength)
  description?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  body: string;

  @ApiProperty({ required: false, default: false })
  @IsBoolean()
  @IsOptional()
  published?: boolean = false;
}
