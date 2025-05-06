/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
        // every time we find an operator, we fid prev two numbers

        // parse through the array 
        // every time we see number push onto stack 
        // if we see operator, then do the opertaion between first number and second number
        // push res back to array 

        let stack = [];
        let result;


        for (let i = 0; i < tokens.length; i++){
            if (!isNaN(tokens[i])){
                stack.push(Number(tokens[i]));
            }
            else { 
                // assume its an operand
                let two = stack.pop();
                let one = stack.pop();
                let result;


                if (tokens[i] =='+'){
                        result = two + one;}
                else if (tokens[i] =='-'){
                        result = one - two;}
                else if (tokens[i] =='*'){
                        result = two * one;}
                else if (tokens[i] =='/'){
                        result = Math.trunc(one / two); 
                }

                stack.push(result);
            }
        }
        return stack[0];
    }