<template>
<v-sheet class="hero3 x" height="100vh" :style="{ backgroundImage: `url(${require('@/assets/1.jpg')})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover'}">
    <v-row class="d-flex  justify-center align-center ma-0" :style="{
        background: 'rgba(0,0,0,0.1)',
        height:'100%'
    }">
       <v-col cols="12" md="8" class="d-flex align-center flex-column pb-12">
            <p class="text-md-h1 text-h4 text-sm-h3 font-weight-bold white--text ">{{$store.state.home[0]}}</p>
            <v-row class="d-flex justify-center">
                <v-col cols="8">
                    <p class="text-body-2 text-sm-body-1 text-md-h6 text-lg-h5 text-center white--text font-weight-medium">{{$store.state.home[1]}}</p>
                </v-col>
            </v-row>
       </v-col>
    </v-row>
</v-sheet>
</template>
<script>
</script>
<style>
</style>