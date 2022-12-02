<template>
    <div>
        <el-row :gutter="20">
            <el-col v-for="(o, index) in 4" :key="o" :span="6">
                <el-card :body-style="{ padding: '0px' }">
                    <swiper :modules="modules" :pagination="{ clickable: true }">
                        <swiper-slide>
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                class="image" />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                class="image" />
                        </swiper-slide>
                        <swiper-slide>
                            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                class="image" />
                        </swiper-slide>
                    </swiper>
                    <div style="padding: 14px">
                        <span>Yummy hamburger</span>
                        <div class="bottom">
                            <time class="time">{{ formatTime }}</time>
                            <el-button type="primary" class="button">跳转</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import SwiperClass, { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
const formatTime = '2020 01 01 12:00:00';
const modules = ref([Pagination]);


</script>


<style>
.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 1;
    min-height: auto;
}

.image {
    width: 100%;
    display: block;
}
</style>