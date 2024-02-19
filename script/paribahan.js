function hideElementDisplay(){
        const moveToTicket=document.getElementById('upcoming');
        moveToTicket.scrollIntoView({ behavior: 'smooth' });
    }
    
    const allBtn=document.getElementsByClassName('seat');
    // console.log(allBtn)
    const dis=document.getElementById('apply');
    let seatCount=0;
    let totalSeat=40;
    for(let btn of allBtn){
        btn.addEventListener('click',function(e){
            if(seatCount>3){
                dis.removeAttribute('Disabled')
                return alert ("You not more ticket purchase") 
              }
              btn.setAttribute('Disabled',true)
          btn.style.background='#1DD100';
          seatCount=seatCount+1
            setInnerText('seat-count',seatCount);
            totalSeat=totalSeat-1;
            setInnerText('total-seat',totalSeat) 
            // select section 
            const perTicketPrice=parseInt(document.getElementById('per-ticket-price').innerText)
            // console.log(perTicketPrice)
            const btnText= btn.innerText;
            //  console.log(btnText,perTicketPrice)
            const li=document.getElementById('create-section');
            const selectContainer=document.getElementById('select-container')
            const p=document.createElement('p');
            p.innerText=btnText +" "+" Economy "+ perTicketPrice;
            li.appendChild(p);

            let totalTicketPrice=parseInt(document.getElementById('total-ticket-price').innerText)
           
            totalTicketPrice=totalTicketPrice+perTicketPrice;
            setInnerText('total-ticket-price',totalTicketPrice);
            const grandTotal=parseInt(document.getElementById('grand-total').innerText);
            setInnerText('grand-total',totalTicketPrice)

        })
       
    }

    // coupon section 
    const btnApply=document.getElementById('apply');
    
    btnApply.addEventListener('click',function(){
        
        let totalPrice=parseInt(document.getElementById('total-ticket-price').innerText)
        const coupon=document.getElementById('coupon').value;
        if((coupon==="NEW15")){

            const discountPrice=totalPrice*0.15;
            let grandTotal=totalPrice-discountPrice;
           
            setInnerText('discount',discountPrice);
            setInnerText('grand-total',grandTotal)
        //    return discountPrice
        } else if(coupon==="Couple 20"){
            const discountPrice=totalPrice*0.20;
            let grandTotal=totalPrice-discountPrice;
           
            setInnerText('discount',discountPrice);
            setInnerText('grand-total',grandTotal)
            
        //    return discountPrice
        }
        else{
            return alert ("invalid coupon code")
        }
       const hide=document.getElementById('hide');
       hide.setAttribute('hidden',true)
    })

   
   
    // const nextBtn=document.getElementById('dis');
    // if(phoned==="number"){
    //     nextBtn.removeAttribute('Disabled')
    // }
    

   
   
    function setInnerText(id,value){
        document.getElementById(id).innerText=value
    }
    
    // btn.setAttribute('Disabled')

    const phoned=document.getElementById('phone-need').value;
    phoned.addEventListener('keyup',function(){
        console.log(phoned)
    })