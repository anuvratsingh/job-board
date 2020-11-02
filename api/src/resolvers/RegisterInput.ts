import { Field, InputType } from 'type-graphql';

@InputType()
export class RegisterInput {
	@Field()
	email: string;
	@Field()
	fistName: string;
	@Field()
	lastName: string;
	@Field()
	password: string;
}
