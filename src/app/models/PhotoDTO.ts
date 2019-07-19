export default class PhotoDTO {
    private _matricule:string;
    private _photoUrl:string;

    constructor(matricule:string, photoUrl:string) {
        this._matricule = matricule;
        this._photoUrl = photoUrl;
    }

    get matricule() {
        return this._matricule;
    }

    get photoUrl() {
        return this._photoUrl;
    }

    set matricule(matricule:string) {
        this._matricule = matricule;
    }

    set photoUrl(photoUrl:string) {
        this._photoUrl = photoUrl;
    }

}