import PersonCustomFieldValueItem from "./PersonCustomFieldValueItem";

export default interface PersonCustomFieldValue {
  customFieldId: number;
  customFieldRuleId: number;
  line: number;
  value: string;
  items: PersonCustomFieldValueItem[];
}