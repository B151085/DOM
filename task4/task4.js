var list=document.getElementsByClassName('list-group-item');
//here list is a array of nodes because all li tags has the same class name
list[2].style.backgroundColor='green';

for(var i=0;i<list.length;i++)
{
    list[i].style.fontWeight='bold';
}
