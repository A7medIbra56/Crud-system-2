let nameFirst = document.getElementById('name')
let Email = document.getElementById('email')
let PatientName = document.getElementById('PatientName')
let PhoneNumber = document.getElementById('Phone')
let button =  document.getElementById('button')
let ProductContainer =[];

let mood = 'create'
let global ;


(function CallFunction() 
{
    if (localStorage.getItem('Product18') == null) 
    {
        ProductContainer = []
    }else
    {
        ProductContainer = JSON.parse(localStorage.getItem('Product18'))
        disPlayProduct (ProductContainer) 
    }
})();


function AddProduct() 
{
    let Product = 
    {
        nameFirst: nameFirst.value ,
        Email: Email.value,
        PatientName: PatientName.value,
        PhoneNumber: PhoneNumber.value
    }
    if (mood === 'create') {
        if( nameFirst.value == '' || Email.value == ''|| PatientName.value == '' || PhoneNumber.value == '')
        {
          alert('Place enter data')
        }
        else{
            ProductContainer.push(Product)
            Clear()
        }
         
       }else if(nameFirst.value == '' || Email.value == ''|| PatientName.value == '' || PhoneNumber.value == '')
       {
       alert('Place enter dat')
    }
    else
    {
        ProductContainer[global] = Product;
        mood = 'create'
        button.innerHTML = 'Add'
    }

    console.log(ProductContainer)
    localStorage.setItem('Product18' ,JSON.stringify(ProductContainer))
    disPlayProduct (ProductContainer) 
}


function disPlayProduct (list)
{
   let carton = '';
    for (let i = 0;  i < list.length; i++) {
        carton+=`<tr>
        <td scope="col">${i+1}</td>
        <td scope="col">${list[i].nameFirst}</td>
        <td scope="col">${list[i].Email}</td>
        <td scope="col">${list[i].PatientName}</td>
        <td scope="col">${list[i].PhoneNumber}</td>
        <td scope="col"> <button onclick="UpdateProduct(${i})"  class="btn btn-outline-info w-100 my-3">Update</button></td>
        <td scope="col"> <button onclick = "deleteProduct(${i})"  class="btn btn-outline-info w-100 my-3 ">delete</button></td>
       </tr>`
    }
  document.getElementById('ProductBody').innerHTML = carton ;
  
}


function Clear() {
    nameFirst.value = '';
    Email.value = '';
    PatientName.value = '';
    PhoneNumber.value = '';
}

function deleteProduct(index)
{
    ProductContainer.splice(index ,1)
    localStorage.setItem('Product18' ,JSON.stringify(ProductContainer))
    disPlayProduct (ProductContainer)
}


function UpdateProduct(i) 
{
    nameFirst.value = ProductContainer[i].nameFirst;
    Email.value = ProductContainer[i].Email;
    PatientName.value = ProductContainer[i].PatientName;
    PhoneNumber.value = ProductContainer[i].PhoneNumber;
    button.innerHTML = 'Update'

      mood = 'update' ;
        global = i ;
    
}

function searchProduct(term) 
{
    let searchProduct = []
  for (let i = 0; i < ProductContainer.length; i++)
  {
    if (ProductContainer[i].nameFirst.toLowerCase().includes(term.toLowerCase())) 
    {
       searchProduct.push(ProductContainer[i])
       disPlayProduct (searchProduct)
    }else
    {
        disPlayProduct (searchProduct)
    }

  }
    
}