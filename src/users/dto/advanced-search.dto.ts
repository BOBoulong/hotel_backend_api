import { IsOptional, IsString } from 'class-validator';

export class AdvancedSearchDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  gmail?: string;

  @IsOptional()
  @IsString()
  isActive?: string;
}
