$.ajax('https://github.com/MaxOstapets/shop/blob/[main|master]/db.json',{ 
    dataType: 'json', 
    data: {limit: 127}, 
    success: function(result){ 
        console.log(result); 
    }, 
    error: function(xhr){                                                                
        console.log(xhr.statusText) 
    } 
});