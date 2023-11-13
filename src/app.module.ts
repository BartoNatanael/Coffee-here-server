import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoasteryModule } from './roastery/roastery.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Admin:admin@cluster0.9beonqd.mongodb.net/?retryWrites=true&w=majority',
    ),
    RoasteryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
