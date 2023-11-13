import { Module } from '@nestjs/common';
import { RoasteryService } from './roastery.service';
import { RoasteryController } from './roastery.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Roastery, RoasterySchema } from './entities/roastery.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Roastery.name, schema: RoasterySchema },
    ]),
  ],
  controllers: [RoasteryController],
  providers: [RoasteryService],
})
export class RoasteryModule {}
