let addCount;
let addCountS;
let recCount;
let listCount;
let delCount;



add . onclick = function()
{
    addCount = prompt('Введите название страны');
    addCountS = prompt('Введите название столицы');
    addCountry(addCount, addCountS);
}

rec . onclick = function()
{
    recCount = prompt('Введите название страны');
    console.log(getCountryInfo(recCount));    
} 
list . onclick = function()
{
    console.log(listCountrys(listCount));
}
del . onclick = function()
{
    delCount = prompt('Введите название страны');
    deleteCountry(delCount);
}   
