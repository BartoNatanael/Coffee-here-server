import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Roastery {
  @Prop()
  name: string;

  @Prop()
  avatarId: string;

  @Prop()
  description: string;

  @Prop()
  city: string;

  @Prop()
  address: string;

  @Prop()
  shopAtPlace: boolean;
}

export type RoasteryDocument = HydratedDocument<Roastery>;

export const RoasterySchema = SchemaFactory.createForClass(Roastery);
