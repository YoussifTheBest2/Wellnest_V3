<template style="">
    <ion-header>
        
                <ion-toolbar style="border: solid 3px burlywood;">
                    <div class="topbar-icon-container-left">
                    <a href="/"><ion-icon class="icon" :icon="arrowBack"></ion-icon></a>
                    
                </div>
                <center><h1>Mental Health</h1></center>
  </ion-toolbar>
    </ion-header>
    
    
    <ion-content>
        <div class="container">
            <div class="img-container">
                <img src="/public/meditationboi (1).png" alt="">
            </div>
            <div class="boxes-container">
                <div class="box-tab"><div class="box-frow">
                    <a style="display: block; text-decoration: none; color: inherit;" href="/meditation"><ion-card class="ion-card-up">
                        <ion-card-content>
                            <center><ion-icon class="icontabs" :icon="roseOutline"></ion-icon></center>
                            <center><h2>Meditation</h2></center>
                        </ion-card-content>
                    </ion-card></a>
                    <a style="display: block; text-decoration: none; color: inherit;" href="https://www.youtube.com/user/yogawithadriene?themeRefresh=1"><ion-card class="ion-card-up">
                        <ion-card-content>
                            <center><ion-icon class="icontabs" :icon="leafOutline"></ion-icon></center>
                            <center><h2>Stress</h2>
                                <h2>Management</h2></center>
                        </ion-card-content>
                    </ion-card></a>
                    
                </div>
                <div class="box-srow">
                    <a style="display: block; text-decoration: none; color: inherit;" href="/journalpage"><ion-card class="ion-card-down">
                        <ion-card-content>
                            <center><ion-icon class="icontabs" :icon="bookOutline"></ion-icon></center>
                            <center><h2>Journal</h2></center>
                        </ion-card-content>
                    </ion-card ></a>
                    <a style="display: block; text-decoration: none; color: inherit;" href="https://mentalhealthhotline.org/"><ion-card class="ion-card-down">
                        <ion-card-content>
                            
                            <center><ion-icon class="icontabs" :icon="callOutline"></ion-icon></center>
                            <center><h2>Support Contacts</h2></center>
                        </ion-card-content>
                    </ion-card></a>
                    <a style="display: block; text-decoration: none; color: inherit;" href="/quotespage"><ion-card class="ion-card-down">
                        <ion-card-content>
                            <center><ion-icon class="icontabs" :icon="newspaperOutline"></ion-icon></center>
                            <center><h2>Quotes</h2></center>
                        </ion-card-content>
                    </ion-card></a>
                    
                </div></div>
            </div>
        </div>
        <div class="footer">
            <center><h2>
                It's Okay to feel tired sometimes. 
            </h2></center>
        </div>
    </ion-content>
</template>

<script setup>
import { IonIcon } from '@ionic/vue';
import { book, logoIonic, person, settings,arrowBack, bookOutline, roseOutline, leafOutline, callOutline, newspaperOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import ExploreContainer from "@/components/ExploreContainer.vue";
</script>

<style>
h2{
    font-family: 'Courier New', Courier, monospace;
    font-weight: 500;
    

}
h1{
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
}
.footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 10rem;
    background-color: rgb(222, 165, 96);
    
}
.box-frow,.box-srow{
    display: flex;
    
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom:30px ;
    
}
.box-tab{
    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
    bottom: 10rem;
}
.ion-card-up{
    
    width: 8rem;
    height: 7.5rem;
    border-radius: 20%;
    background-color: bisque;
}

.ion-card-down{
    
   
    text-wrap-style: pretty ;
    width: 6.2rem;
    height: 7.5rem;
    border-radius: 20%;
    background-color: bisque;
}
.topbar-icon-container-left {
    position: absolute;
    left: 0;
}
.icon {
    font-size: x-large;
    opacity: 100%;

    margin: 0.415rem;

}
.icontabs{
    width: 3.7rem;
    height: 3.7rem;
}
</style>