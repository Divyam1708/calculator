let element_value=document.querySelectorAll('.element_value')

let val1=new String();
let sum_store=0;
let pi=0;
element_value.forEach((e)=>{
    let store_expression=document.getElementById('store_expression')
    let store_result=document.getElementById('store_result');
    e.addEventListener('click',()=>{
        if (e.value=="=") {
            
            
            if (!val1.includes("$sπ") && !val1.includes("*e"))
            {
                if (val1.includes("π")) {
                    val1=val1.replace('π',"3.14159");
                }
                if (val1.includes("e")) {
                    val1=val1.replace('e',"2.7182");
                }
                sum_store=eval(val1);
                console.log(sum_store);
                store_result.innerText=`${sum_store}`;
            }
            else if (!val1.includes("*π")) {
                console.log("pi error triggered");
                store_result.innerText=`Error due to pi`;
            }

            else if (!val1.includes("*e")) {
                console.log("e error triggered");
                store_result.innerText=`Error due to e`;
            }
                
                
            if (val1.includes("3.14159")) {
                val1=val1.replace("3.14159",'π');
            }
            if (val1.includes("27182")) {
                val1=val1.replace("2.7182",'e');
            }
        }
        if (e.value!="=" && e.value!="clear") {
            val1=val1.concat(e.value);
            console.log(val1);
        }
        if (e.value=="clear") {
            val1=val1.slice(0,-1);
            sum_store=eval(val1);
            console.log(sum_store);
            store_result.innerText=`${sum_store}`;            
        }
        if (e.value=="C") {
            val1=' ';
            store_result.innerText=` `;

        }
        if (!val1) {
            store_result.innerText=` `
            
        }
        store_expression.style.color="red"
        store_expression.innerText=`${val1}`
    })
})