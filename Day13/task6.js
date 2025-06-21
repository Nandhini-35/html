function myfun(weight,height)
{

        let BMI=weight/(height*height);
        if(BMI <18.5)
        {
            console.log("your in under weight");
        }
        else if(BMI >18.5 && BMI<=24.9)
        {
            console.log("your Normal");
        }
        else
        {
            console.log("your in Over Weight");
        }
}
myfun(52,1.6);