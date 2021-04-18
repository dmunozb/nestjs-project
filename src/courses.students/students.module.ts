import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { CoursesModule } from 'src/courses/courses.module';

@Module({
  imports: [
    CoursesModule,
    TypeOrmModule.forFeature([Student]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
