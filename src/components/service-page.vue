<template>
<v-row class="d-flex justify-center pb-16 pt-10 x">
    <v-col cols="11" class="pa-0 px-8">
        <v-row class="d-flex justify-center py-8 pa-0 pa-sm-16">
            <v-col cols="11" class="d-flex flex-column align-center">
                <p class="text-h4 text-sm-h3 text-md-h2  font-weight-bold">{{ $store.state.service[0] }} </p>
                <p class="text-center text-body-2 text-md-h6 text-xl-h5 font-weight-light mt-2 mt-sm-6">{{$store.state.service[1]}}</p>
            </v-col>
        </v-row>
        <v-row class="pa-0 d-flex flex-column flex-sm-row">
            <v-col cols="12" sm="4" class="pa-0"> 
                <v-img :src="$store.state.images[5]"></v-img>
            </v-col>
            <v-col cols="12" sm="8" class="pa-0 pl-sm-2 mt-14 mt-sm-0">
                <v-img :src="$store.state.images[6]"></v-img>
            </v-col>
        </v-row>
        <v-row class="mt-4 d-flex flex-column flex-sm-row">
            <v-col cols="12" sm="6" class="pa-0 mt-14 mt-sm-0 pr-sm-1">
                <v-img :src="$store.state.images[7]"></v-img>
            </v-col>
            <v-col cols="12" sm="6" class="pa-0 mt-14 mt-sm-0 pl-sm-1">
                <v-img :src="$store.state.images[8]"></v-img>
            </v-col>
        </v-row>
    </v-col>
</v-row>
</template>
<script>

</script>
<style>

</style>