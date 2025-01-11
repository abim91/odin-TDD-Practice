import { captalize } from "./capitalize";
import {reverse} from "./reverse.js"
import {add,subtract,multiply,divide} from "./calculator.js";
import { caesarCipher } from "./caesarCipher.js";
import { analyze } from "./analyzeArray.js";

test("Decipher 'xyz' to 'abc",()=>{
    expect(caesarCipher("xyz",3)).toBe("abc");
})

test("Decipher 'HeLLo' to be 'KhOOr'",()=>{
    expect(caesarCipher("HeLLo",3)).toBe("KhOOr");
});

test("Decipher 'Hello, World!' to be ''",()=>{
    expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!");
});



test("First letter should be Upper Case",()=>{
    expect((captalize("alex"))).toBe("Alex");
    expect((captalize("Ann"))).toBe("Ann");
});
test("First letter should be Upper Case",()=>{
    expect((captalize("Ann"))).toBe("Ann");
});

test("Reverse the given String",()=>{
    expect(reverse("ABIM")).toBe("MIBA");

});

test("Add the two values ", ()=>{
    expect(add(100,100)).toBe(200);
});

test("Subtract the two values", ()=>{
    expect(subtract(500,200)).toBe(300);
});

test("Multiply the two values", ()=>{
    expect(multiply(100,100)).toBe(10000);
})

test("Divide the two values",()=>{
    expect(divide(600,200)).toBe(3);
})

test("Return an object by analysing the array [1,8,3,4,2,6]",()=>{
    expect(analyze([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
})
