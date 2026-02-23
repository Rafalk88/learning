// notes.module.ts
import { NotesController } from './notes.controller.ts';
import { NotesService } from './notes.service.ts';
import { PrismaService } from 'prisma';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [NotesController],
  providers: [NotesService, PrismaService],
  exports: [NotesService],
})
export class NotesModule {}

// notes.controller.ts
import { Controller, Get } from '@nestjs/common';
import { NotesService } from './notes.service.ts';

@Controller('notes')
export class NotesController {
  constructor(private readonly service: NotesService) {}
  @Get()
  async findAll(): Promise<string[]> {
    return this.service.getAllNotes();
  }
}

// notes.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma';

@Injectable()
export class NotesService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllNotes() {
    return await this.prisma.notes.findAll();
  }
}
