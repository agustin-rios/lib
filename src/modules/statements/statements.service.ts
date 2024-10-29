import { type Statement } from '@prisma/client';
import prisma from '@/lib/prisma';
import LogMessage from '@/decorators/log-message.decorator';

export default class StatementService {
  @LogMessage<
    [Omit<Statement, 'id'> & { content: PrismaJson.RichTextContent }]
  >({ message: 'Creating a new statement with rich text content' })
  public async createStatement(
    data: Omit<Statement, 'id'> & { content: PrismaJson.RichTextContent }
  ) {
    return await prisma.statement.create({ data });
  }

  @LogMessage<[number]>({ message: 'Fetching statement by ID' })
  public async getStatementById(id: number) {
    return await prisma.statement.findUnique({ where: { id } });
  }

  @LogMessage<[number, Partial<Statement>]>({ message: 'Updating statement' })
  public async updateStatement(id: number, data: Partial<Statement>) {
    return await prisma.statement.update({
      where: { id },
      data,
    });
  }

  @LogMessage<[number]>({ message: 'Deleting statement' })
  public async deleteStatement(id: number) {
    return await prisma.statement.delete({ where: { id } });
  }
}
