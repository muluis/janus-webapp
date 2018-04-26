/**
 * @author Luis Munoz
 * @author Tanhim Ahmed
 */
export class Location {
    // primary key Id of the location object //
    locationId: number;
    // the street of the campus main office //
    street: string;
    // the city of the campus main office //
    city: string;
    // the state of the campus main office //
    state: string;
    // the zip code of the campus main office //
    zip: number;
    // the location title of the revature campus //
    title: string;
    // the active status of the campus //
    active: boolean;

    // this is a constructor //
    constructor(locationId: number, street: string, city: string, state: string, zip: number, title: string, active: boolean) {
        this.locationId = locationId;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.title = title;
        this.active = active;
    }
}
