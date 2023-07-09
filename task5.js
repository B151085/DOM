var li=document.getElementsByClassName('list-group-item');
for(var i=0;i<li.length;i++)
{
    li[i].style.color='green';
}
// above code will not effect the newly added list item so do it by tag name

var list=document.getElementsByTagName('li');
for(var i=0;i<list.length;i++)
{
    list[i].style.color='red';
}