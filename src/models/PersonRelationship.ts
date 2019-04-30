import PersonRelationshipService from "./PersonRelationshipService";

export default interface PersonRelationship {
  id: string;
  name: string;
  slaAgreement: string;
  forceChildrenToHaveSomeAgreement?: boolean;
  allowAllServices?: boolean;
  includeInParents?: boolean;
  loadChildOrganizations?: boolean;
  services: PersonRelationshipService[];
}