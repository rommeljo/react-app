function List() {


    const fruits=[{id:1,name:"apple", calories:95},
    {id:2,name:"banana" ,calories:90},
    {id:3,name:"pear",calories:78},
    {id:4,name:"coconut",calories:89},
    {id:5,name:"pineapple",calories:105}]
    
    fruits.sort((a,b)=> a.name.localeCompare(b.name)) //sorts alphabetically
    fruits.sort((a,b)=> a.calories - (b.calories))//sorts
    const list=fruits.map(fruit => <li key={fruit.id}>
                                    {fruit.name}:&nbsp;<b>{fruit.calories}</b></li>)
    return (<ol>{list}</ol>);

}
export default List;
