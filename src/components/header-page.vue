<template>
<header>
    <v-row class="d-flex justify-center py-3 py-sm-4 py-md-5 py-xl-8 x mb-0 black">
        <v-col cols="11" class="d-flex align-center pt-5">
            <v-row class="d-flex justify-space-between align-center pa-0">
                <p class="text-h5 text-sm-h4 text-xl-h2 font-weight-bold primary--text ma-0">{{$store.state.logo}}</p>
                <v-col cols="5" class="d-none d-md-flex justify-space-between align-center pa-0">
                    <p class="primary--text ma-0 text-subtitle-1 text-body-2 text-lg-h6 text-xl-h5 " v-for="(title,index) in $store.state.header" :key="index">{{title}}</p>
                </v-col>
                <v-col cols="3" class="d-flex d-md-none flex-row-reverse text-center">
                        <v-menu offset-y>
                          <template v-slot:activator="{ on, attrs }">
                            <div class="d-flex flex-column " v-on="on" v-bind="attrs" >
                                <div class="primary mt-1 mb-1 pt-1 px-4 rounded-xl"></div>
                                <div class="primary mb-1 pt-1 px-4 rounded-xl"></div>
                                <div class="primary pt-1 px-4 rounded-xl"></div>
                            </div>
                          </template>
                          <v-list>
                            <v-list-item
                              v-for="(title, index) in $store.state.header"
                              :key="index"
                            >
                              <v-list-item-title>{{ title }}</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</header>
</template>
<script>
export default{
    methods:{
      
    }
}
</script>
<style>

</style>