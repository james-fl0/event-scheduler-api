import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) { }

  create(createEventDto: CreateEventDto) {
    return this.prisma.event.create({ data: createEventDto });
  }

  findAll() {
    return this.prisma.event.findMany();
  }

  findOne(id: string) {
    return this.prisma.event.findUnique({
      where: {
        event_id: id
      }
    })
  }

  update(id: string, updateEventDto: UpdateEventDto) {
    return this.prisma.event.update({
      where: { event_id: id },
      data: updateEventDto,
    });
  }

  remove(id: string) {
    return this.prisma.event.delete({ where: { event_id: id } });
  }
}
