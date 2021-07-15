/*-------- Profanity Filter For JS ----------*/
class Profanity {
    constructor() {
        const profanities = import profanities from ('./profanities.json')
        this.profanities = profanities.profanities; //object
    }

    isProfane(string) {

        //stops the function if the stirng is empty

        if (string === "") {
            console.log("ProfanityJS: Can not Check The Value Passed Because It Is Empty !");
            return;
        }

        //stops the function if string is not a string

        if (typeof string !== "string") {
            console.log("ProfanityJS: Can not Check The Value Passed Because It Is Not a String!");
            return;
        }

        //check for profanities

        if (this.checkProfanity(string) === true) {
            return true;
        } else {
            return false;
        }

    }



    checkProfanity(string) {
        const str = string.toString().toLowerCase();
        var str1 = this.removeSperators(str);
        var str2 = this.removedupes(str1);

        for (var i in this.profanities) {
            if (str2.includes(this.profanities[i])) {
                return true;
            }
        }
    }


    removeSperators(string) {
        var str = string.toString().toLowerCase();
        return str.replace(/[$-/:-?{-~!"^_`\[\]1234567890]/gi, "");
    }

    removedupes(string) {
        var str = string.toString().toLowerCase();
        return str.replace(/(.)(?=.*\1)/g, "");
    }

    obsufcate(string) {
        var str = string.toString().toLowerCase();
        return str.replace(/[$-/:-?{-~!"^_`\[\]\D1234567890]/gi, "*");
    }

}
