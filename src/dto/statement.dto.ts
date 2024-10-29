import { IsJSON, IsNotEmpty } from 'class-validator';

export class CreateStatementDto {
  @IsJSON()
  @IsNotEmpty()
  content: string; // Validates JSON structure for flexible content in Statement
}
