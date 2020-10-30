import { Field, InputType } from 'type-graphql';

@InputType()
export class RegisterInput {
	@Field()
	email: string;
	@Field()
	username: string;
	@Field()
	fistName: string;
	@Field()
	lastName: string;
	@Field()
	password: string;
	@Field({ nullable: true })
	status?: boolean;
}
