///1047-find-duplicates-leetcode-Javascript-Stack-solution

var removeDuplicates = function(S) {
    let stack = [];
    for(let i = 0 ; i < S.length; i++){
        let j = 0;
        while(S.length > 0 && S[i] === stack[stack.length-1]){
            j = stack.pop();
            
        }
        if(j !== S[i]){
            stack.push(S[i]);
        }
    }
    return stack.join('')
    
};
