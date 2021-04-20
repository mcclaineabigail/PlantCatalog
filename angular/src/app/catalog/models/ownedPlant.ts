import { ICatalog } from './catalog';
import { IPlant } from './plant';
import { IRoom } from './room';

export interface IOwnedPlant {
  //id: number;
  nickName: string;
  plantId: number;
  roomId: number;
}
