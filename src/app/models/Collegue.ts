export default class Collegue {
    private _matricule?:string;
    private _nom:string;
    private _prenoms:string;
    private _email:string;
    private _dateDeNaissance:Date;
    private _photoUrl:string;
    private _nomUtilisateur?:string;
    private _motDePasse?:string;
    private _roles?:string[];

    constructor(nom:string, prenoms:string, email:string, dateDeNaissance:Date, photoUrl:string) {
        this._nom=nom;
        this._prenoms=prenoms;
        this._email=email;
        this._dateDeNaissance=dateDeNaissance;
        this._photoUrl=photoUrl;
    }

    get matricule() {
        return this._matricule;
    }
    get nom() {
        return this._nom;
    }
    get prenoms() {
        return this._prenoms;
    }
    get email() {
        return this._email;
    }
    get dateDeNaissance() {
        return this._dateDeNaissance;
    }
    get photoUrl() {
        return this._photoUrl;
    }
    get nomUtilisateur() {
        return this._nomUtilisateur;
    }
    get motDePasse() {
        return this._motDePasse;
    }
    get roles() {
        return this._roles;
    }
    set matricule(matricule:string) {
        this._matricule = matricule;
    }
    set nom(nom:string) {
        this._nom = nom;
    }
    set prenoms(prenoms:string) {
        this._prenoms = prenoms;
    }
    set email(email:string) {
        this._email = email;
    }
    set dateDeNaissance(dateDeNaissance:Date) {
        this._dateDeNaissance = dateDeNaissance;
    }
    set photoUrl(photoUrl:string) {
        this._photoUrl = photoUrl;
    }
    set nomUtilisateur(nomUtilisateur:string) {
        this._nomUtilisateur = nomUtilisateur;
    }
    set motDePasse(motDePasse:string) {
        this._motDePasse = motDePasse;
    }
    set roles(roles:string[]) {
        this._roles = roles;
    }
}