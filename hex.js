function Hex(value){

    this.value = value;

    this.valueOf = function(){
        return this.value;
    };

    this.toString = function(){
        return `0x${this.value.toString(16).toUpperCase()}`;
    };

    this.toJSON = function(){
        return this.toString();
    };

    this.plus = function(num){
        return new Hex(this.value + num);
    };

    this.minus = function(num){
        return new Hex(this.value - num);
    }

}

Hex.parse = function(string){
    return parseInt(string.replace(/^0x/, ""), 16);
}
