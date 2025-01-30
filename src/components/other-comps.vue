<template>
<div>
    <v-row class="d-flex justify-center pb-8 x">
        <v-col cols="12" md="11" class="d-flex flex-column align-center">
            <p class="text-h4 text-sm-h3 text-md-h2 text-xl-h1 font-weight-bold mt-16 mb-0">{{$store.state.other[0]}}</p>
            <v-carousel hide-delimiters height="70vh">
                <v-carousel-item v-for="(client,index) in $store.state.clients" :key="index">
                    <v-row class="d-flex justify-center align-center" :style="{height:'100%'}">
                        <v-col cols="8" sm="10" class="d-flex flex-column justify-center align-center px-4 pt-16">
                            <p class="text-body-2 text-sm-h6 text-md-h5 text-xl-h3 text-center">{{$store.state.opinions[index]}}</p>
                            <p class="text-body-1 text-sm-h5 text-md-h4 text-xl-h3 mt-4 mt-sm-8 mt-md-16 ">{{client}}</p>
                        </v-col>   
                    </v-row>
                </v-carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
    <div class="hero">
        <v-row class=" d-flex align-center justify-center x" :style="{background:'rgba(0,0,0,0.4)',height:'100%'}">
            <v-col cols="10" sm="7" class="pa-0"><p class="text-h5 text-sm-h4 text-md-h3 text-xl-h2 text-center white--text font-weight-bold">{{ $store.state.other[1] }} </p> </v-col>
        </v-row>
    </div>
    <v-row class="d-flex justify-center ma-0 py-4 py-sm-8 py-md-16 white--text primary x">
        <v-col cols="10" sm="7" class="d-flex flex-column align-center px-0 py-16">
            <p class="text-h5 text-sm-h4 text-md-h3 text-xl-h2 font-weight-bold mb-7 mb-xl-10">{{$store.state.other[2]}}</p>
            <p class="text-body-2 text-sm-h6 text-xl-h4 font-weight-light text-center">{{$store.state.other[3]}}</p>
            <v-btn outlined class="rounded-xxl white--text py-5 py-sm-6 px-sm-8 px-6 py-xl-7 text-subtitle-2 text-xl-h5 mt-8">{{$store.state.other[4]}}</v-btn>
        </v-col>
    </v-row>
    <v-row class="d-flex justify-center py-4 x">
        <v-col cols="12" sm="11" class="px-8 d-flex flex-column align-center py-16">
            <p class="text-h4 text-md-h3 text-xl-h2 font-weight-bold">{{ $store.state.other[5] }}</p>
            <p class="text-body-2 text-sm-h6 text-xl-h4 text-center mt-4">{{$store.state.other[6]}}</p>
            <v-row class="pt-12">
                <v-col>
                    <p class="text-body-2 text-sm-h6 text-xl-h4 text-center text-sm-start">{{$store.state.other[7]}}</p>
                </v-col>
                <v-col cols="0" sm="1">

                </v-col>
                <v-col >
                    <p class="text-body-2 text-sm-h6 text-xl-h4 text-center text-sm-start">{{$store.state.other[8]}}</p>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    <v-row class="hero2 x">
        <v-col cols="12" class="trans">
            <v-row class="d-flex justify-center">
                <v-col cols="10" sm="9" md="8" class="py-14 px-0">
                    <v-row class="d-flex justify-center py-8">
                        <p class="white--text text-h5  text-sm-h3 text-xl-h2 ">{{ $store.state.other[9] }} </p>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <label for="1" class="white--text text-subtitle-1 text-xl-h5 font-weight-medium">Full Name</label>
                            <input class="pa-4 mt-2 white text-xl-h5 " type="text" id="1" placeholder="Full Name" :style="{width:'100%'}">
                        </v-col>
                        <v-col cols="12">
                            <label for="2" class="white--text text-subtitle-1 text-xl-h5  font-weight-medium">Email</label>
                            <input class="pa-4 mt-2 white text-xl-h5 " type="text" id="2" placeholder="Email" :style="{width:'100%'}">
                        </v-col>
                        <v-col cols="12">
                            <label for="3" class="white--text text-subtitle-1 text-xl-h5  font-weight-medium">Phone Number</label>
                            <input class="pa-4 mt-2 white text-xl-h5 " type="text" id="3" placeholder="Phone Number" :style="{width:'100%'}">
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <label for="4" class="white--text text-subtitle-1 text-xl-h5  font-weight-medium">How many nights?</label>
                            <input id="4" type="text" class="pa-4 mt-2 white text-xl-h5 " placeholder="How many nights?" :style="{width:'100%'}">
                        </v-col>
                        <v-col cols="12" sm="6">
                            <label for="5" class="white--text text-subtitle-1 text-xl-h5  font-weight-medium">How many guests?</label>
                            <input id="5" type="text" class="pa-4 mt-2 white text-xl-h5 " placeholder="How many guests?" :style="{width:'100%'}">
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <label for="6" class="white--text text-subtitle-1 text-xl-h5  font-weight-medium">From</label>
                            <input id="6" type="text" class="pa-4 mt-2 white text-xl-h5 " placeholder="From" :style="{width:'100%'}">
                        </v-col>
                        <v-col cols="12" sm="6">
                            <label for="7" class="white--text text-subtitle-1 text-xl-h5  font-weight-medium">To</label>
                            <input id="7" type="text" class="pa-4 mt-2 white text-xl-h5 " placeholder="To" :style="{width:'100%'}">
                        </v-col>
                    </v-row>
                    <v-row class="d-flex justify-center">
                        <v-col cols="12">
                            <label for="8" class="white--text text-subtitle-1 text-xl-h5  font-weight-medium">Message</label>
                            <textarea id="8" class="pa-4 pb-16 mt-2 white text-xl-h5 " placeholder="Message" :style="{width:'100%',resize:'vertical'}"></textarea>
                        </v-col>
                        <v-col cols="6" sm="10" md="12" class="pt-6 " >
                            <v-btn class="primary rounded-xxl py-6 text-subtitle-2 text-xl-h6" width="100%">send</v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    <v-row class="d-flex justify-center x">
        <v-col cols="10" sm="9" class="d-flex flex-column px-1 py-16">
            <p class="text-h5 text-sm-h4 text-center text-md-h3 text-lg-h2 pt-0 pt-lg-16"  :style="{fontFamily:'Jost !important',lineHeight:1.4}">{{$store.state.other[10]}}</p>
            <p class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-center pb-0 pb-lg-16"  :style="{fontFamily:'Jost !important',lineHeight:1.4}">{{$store.state.other[11]}}</p>
        </v-col>
    </v-row>
</div>

</template>
<script>
export default{
    methods:{
    }
}
</script>
<style>
.hero{
    background-image: url('~@/assets/2.jpg');
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    height: 110vh;
}
.hero2{
    background-image: url('~@/assets/3.jpg');
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
}

</style>