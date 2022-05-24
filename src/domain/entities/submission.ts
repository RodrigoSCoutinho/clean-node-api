import { Entity } from "../../core/domain/Entity";

type SubmissionProps = {
    name: string;
    email: string;
};
export class Submission extends Entity<SubmissionProps>{
    private constructor(props: SubmissionProps, id?: string) {
        super(props, id);
     }

     public create(props: SubmissionProps, id?: string){
         const submission = new Submission(props, id);

         return submission;
     }
}