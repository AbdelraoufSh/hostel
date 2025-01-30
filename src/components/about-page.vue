<template>
    <div class="e">
        <v-row class="d-flex justify-center py-16 x">
            <v-col cols="11" sm="10" md="7" class="d-flex flex-column align-center text-center px-6">
                <p class="text-h6 text-sm-h4 text-md-h3 text-xl-h2 font-weight-medium mb-6 mb-md-10">{{ $store.state.about[0] }} </p>
                <p class="text-body-2 text-sm-headline text-xl-h5 font-weight-light">{{ $store.state.about[1] }} </p>
                <p class="text-body-2 text-sm-headline text-xl-h5 mb-6 font-weight-light">{{$store.state.about[2]}}</p>
                <p class="text-body-2 text-sm-headline text-xl-h5 font-weight-light">{{$store.state.about[3]}}</p>
                <v-btn class="primary rounded-xxl py-5 py-sm-6 px-sm-7 mt-8 px-3 text-subtitle-2 font-weight-light">{{ $store.state.about[4] }} </v-btn>
            </v-col>
            
        </v-row>
        <v-row class="d-flex justify-center x">
            <v-col cols="11" class="px-2 px-sm-7">
                <v-row class="mb-6">
                    <v-col cols="12 " sm="6" class="px-2 px-md-4">
                        <v-img :src="$store.state.images[0]"></v-img>
                    </v-col>
                    <v-col cols="12" sm="6" class="px-2 px-md-4 my-16 my-sm-0">
                        <v-img :src="$store.state.images[1]"></v-img>
                    </v-col>
                </v-row>
                <v-row class="d-flex justify-center mt-0 mt-sm-6 mt-md-16">
                    <v-col cols="12" md="10">
                        <v-carousel hide-delimiters height="55vw">
                            <v-carousel-item v-for="(image,index) in $store.state.images1" :key="index"><v-img :src="image"></v-img></v-carousel-item>
                        </v-carousel>
                    </v-col>
                   
                </v-row>
            </v-col>

        </v-row>
    </div>
</template>

<script>
</script>
<style>
</style>