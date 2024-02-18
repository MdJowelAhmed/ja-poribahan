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
          btn.style.background='#1DD100';
          seatCount=seatCount+1
            setInnerText('seat-count',seatCount);
            totalSeat=totalSeat-1;
            setInnerText('total-seat',totalSeat) 
        })
        const perTicketPrice=parseInt(document.getElementById('per-ticket-price'))
       console.log(perTicketPrice)
      
    }

    function setInnerText(id,value){
        document.getElementById(id).innerText=value
    }
    
    btn.setAttribute('Disabled')