import PersonAddress from "./PersonAddress";
import PersonContact from "./PersonContact";
import PersonEmail from "./PersonEmail";
import PersonRelationship from "./PersonRelationship";
import PersonCustomFieldValue from "./PersonCustomFieldValue"
import PersonAtAsset from "./PersonAtAsset";
import { PersonType, ProfileType } from '../enums';


export default interface Person {
  Id?: string;
  CodeReferenceAdditional: string;
  IsActive?: boolean;
  PersonType?: PersonType;
  ProfileType?: ProfileType;
  AccessProfile: string;
  CorporateName: string;
  BusinessName: string;
  CpfCnpj: string;
  UserName: string;
  Password: string;
  Role: string;
  BossId: string;
  BossName: string;
  Classification: string;
  CultureId: string;
  TimeZoneId: string;
  AuthenticateOn: string;
  CreatedDate?: Date;
  CreatedBy: string;
  ChangedDate?: Date;
  ChangedBy: string;
  Observations: string;
  Addresses: PersonAddress[];
  Contacts: PersonContact[];
  Emails: PersonEmail[];
  Teams: string[];
  Relationships: PersonRelationship[];
  CustomFieldValues: PersonCustomFieldValue[];
  AtAssets: PersonAtAsset[];
}