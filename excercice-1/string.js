var toto = "hello world";

function ucfirst(string) 
{    
    if(string == null || string == "")
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    else
        console.log("Not string")
}
    
function capitalize(string)
{
    return string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
    
function camelCase(string)
{
    return string.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}
    
function snake_case(string)
{
    return string.toLowerCase().split(' ').join('_')
}

function leet(string)
{

}
    console.log(ucfirst(toto));
    console.log(capitalize(toto));
    console.log(camelCase(toto));
    console.log(snake_case(toto));
