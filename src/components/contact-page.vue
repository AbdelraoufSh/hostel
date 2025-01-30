<template>
<v-row class="x">
    <v-col cols="12" class=" pa-0" :style="{
        position: 'relative',
        zIndex: 2
    }">
        <iframe :style="{height:'100vw'}"  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6574.352136917445!2d37.09359703711058!3d36.20238465294139!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sus!4v1735163767286!5m2!1sar!2sus" width="100%"  style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </v-col>
    <v-col cols="12"  class="pa-16 my-8 d-none d-md-flex" :style="{position:'absolute'}">
        <v-row :style="{height:'100vw'}">
            <v-col cols="8" :style="{zIndex:1}"></v-col>
            <v-col class="white d-flex flex-column px-5 py-12 justify-space-between rounded-lg" cols="4" :style="{zIndex:3,height:'85vw'}">
                <p class="text-h3 text-xl-h2">{{$store.state.contact[0]}}</p>
                <p class="text-h6 text-xl-h4 font-weight-regular mt-4">{{$store.state.contact[1]}}</p>
                <input :style="{border: '1px solid rgba(0,0,0,0.2)',width:'100%'}"  type="text" placeholder="Your Name" class="mt-8 pa-3 pa-xl-6 text-xl-h4">
                <input :style="{border: '1px solid rgba(0,0,0,0.2)',width:'100%'}"  type="text" placeholder="Phone" class="mt-10 pa-3 pa-xl-6 text-xl-h4">
                <input :style="{border: '1px solid rgba(0,0,0,0.2)',width:'100%'}"  type="text" placeholder="Email" class="mt-10 pa-3 pa-xl-6 text-xl-h4">
                <textarea :style="{border: '1px solid rgba(0,0,0,0.2)',width:'100%'}"  class="mt-10 pa-3 pa-xl-6 text-xl-h4" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <v-btn class="primary mt-8 rounded-xxl pa-6 text-subtitle-2 text-xl-h5">
                    Send Messages
                </v-btn>
            </v-col>
        </v-row>
    </v-col>
    <v-col cols="12"  class=" my-4 d-flex d-md-none">
        <v-row class="d-flex justify-center pb-16">
            <v-col class="white d-flex flex-column align-center " cols="10">
                <p class="text-h4">{{$store.state.contact[0]}}</p>
                <p class="text-body-2 text-center font-weight-regular mt-4">{{$store.state.contact[1]}}</p>
                <input :style="{border: '1px solid rgba(0,0,0,0.2)',width:'100%'}" type="text" placeholder="Your Name" class="mt-8 pa-3">
                <input :style="{border: '1px solid rgba(0,0,0,0.2)',width:'100%'}"  type="text" placeholder="Phone" class="mt-10 pa-3">
                <input :style="{border: '1px solid rgba(0,0,0,0.2)',width:'100%'}"  type="text" placeholder="Email" class="mt-10 pa-3">
                <textarea :style="{border: '1px solid rgba(0,0,0,0.2)',width:'100%'}"  class="mt-10 pa-3" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <v-btn class="primary mt-8 rounded-xxl pa-6 text-subtitle-2">
                    Send Messages
                </v-btn>
            </v-col>
        </v-row>
    </v-col>
</v-row>
</template>
<script>
</script>
<style scoped>
</style>