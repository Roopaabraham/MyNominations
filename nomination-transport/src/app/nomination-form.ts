export class NominationForm {

    constructor(

        public NominationID: number,
        public FromLocation: string,
        public ToLocation: string,
        public Product: string,
        public Volume: number,
        public StartDate: Date,
        public EndDate: Date
    ){}
}
