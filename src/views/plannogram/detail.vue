<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="mr40 mt20">
                    <router-link to="/list-plannogram">
                        <img src="../../assets/icons/back.svg">
                    </router-link>
                </div>
                
                <div>
                    <h1 class="m0">Detail Plannogram</h1>
                    <p class="mt5 mb20 tc-green">Your Plannogram details</p>
                </div>
            </div>
            <hr class="uline-grey">
            <div class="mt20">
                <div class = "image-container">
                    <img style="width: 400px;
                    height: 400px;
                    margin-right: 20px;" 
                    src="../../assets/images/flashSale.svg" 
                    alt="">
                    
                    
                    
                </div>  
                
                <div class="text-container">
                    <p class="text-container" style="font-size: 10px; color: grey;">Plannogram Name</p>
                    <h1 class="text-container" style="font-size: 20px;">Flash Sale</h1>
                    
                    <div style="overflow: hidden;">
                        <p class="text-container" style="float: left; margin-right: 5px;">Broadcast Schedule: </p>
                        <p class="text-container" style="float: left; margin-right: 5px; color: grey;">Rabu</p>
                        
                        
                    </div>
                    <p class="text-container" style="float: left; margin-right: 70px;">Plannogram Status</p>
                    <p class="text-container" style="float: left; margin-right: 70px;">Valid From</p>
                    <p class="text-container" style="float: left; margin-right: 50px;">Falid Until</p>
                    <div class="mt0">
                        <label class="label-green" style="margin-right: 120px;">Active</label>
                        <label class="label-green" style="margin-right: 30px;">01-06-2021</label>
                        <label class="label-green">03-06-2021</label>
                    </div>
                </div>     
                

               

                
                
            
            
            </div>
    
    </div>
</div>
</template>

<script>
export default {
	name: 'detail-plannogram'
}
</script>