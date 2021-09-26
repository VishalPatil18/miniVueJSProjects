<!-- template begins -->
<template>
    <div id="app">
        <header>
            <h1>My Music</h1>
        </header>

        <main>
            <section class="player">
                <h2 class="song-title">{{ current.title }}<br><span>({{ current.artist }})</span></h2>
                <div class="controls">
                    <button class="prev" @click="prev">Prev</button>
                    <button class="play" v-if="!isPlaying" @click="play">Play</button>
                    <button class="pause" v-else @click="pause">Pause</button>
                    <button class="next" @click="next">Next</button>
                </div>
            </section>
            <section class="playlist">
                <h3>The Playlist</h3>
                <button v-for="(song, index) in songs" :key="song.src" @click="play(song)" :class="(song.src == current.src) ? 'playing' : 'song'">{{index+1}}. {{ song.title }} - {{ song.artist }}</button>
            </section>
        </main> 

    </div>
</template>
<!-- template ends -->

<!-- Script begins -->
<script>
export default {
    name: 'App',
    data() {
        return {
            current: {},
            index: 0,
            isPlaying: false,
            songs: [
                {
                    title: 'Eyes on You',
                    artist: 'Unknown',
                    src: require('./assets/EyesOnYou.mp3')
                    // with require we specify the location of the file and assign it to a variable
                },
                {
                    title: 'Traversing Godmode',
                    artist: 'Youtube',
                    src: require('./assets/TraversingGodmode.mp3')
                },
            ],
            player: new Audio(),
            // the "new Audio" creates a new HTML5 audio element
        }
    },
    methods: {
        play(song){
            if(typeof song.src != "undefined") {
                this.current = song;
                this.player.src = this.current.src;
            }
            this.player.play();
            this.player.addEventListener('ended', function(){
                this.index++;

                if(this.index > this.songs.length - 1) {
                    this.index = 0;
                }

                this.current = this.songs[this.index];
                this.play(this.current);                
            }.bind(this));
            this.isPlaying = true;
        },
        pause(){
            this.player.pause();
            this.isPlaying = false;
        },
        prev(){
            this.index--;
            if(this.index < 0) {
                this.index = this.songs.length - 1;
            }

            this.current = this.songs[this.index];
            this.play(this.current);
        },
        next(){
            this.index++;
            if(this.index > this.songs.length - 1) {
                this.index = 0;
            }

            this.current = this.songs[this.index];
            this.play(this.current);
        }
    },
    // the created acts as a construcor which is runned automatically once the app has been built
    created() {
        this.current = this.songs[this.index];  // gets the current song to be played into the current object
        this.player.src = this.current.src;     // sets the src for the player to the src of the current song
        // this.player.play();                  // plays the song
    }
};
</script>
<!-- Script ends -->

<!-- Style begins -->
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: sans-serif;
    width: 500px;
    margin: 0 auto;
    margin-top: 70px;
    border: solid 2px #000;
    border-radius: 18px 18px 30px 30px;
    background-image: linear-gradient(to right, #cc2e5d, #2a13ff);
}
header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: #212121;
    color: #ffffff;
    border-radius: 16px 16px 0px 0px;
}
header h1{
    font-size: 80px;
    text-transform: uppercase;
}
main{
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    padding: 25px;
    border: solid 2px #000;
    border-radius: 0px 0px 28px 28px;
    background: #fff;
}
.song-title{
    color: #3d3e3f;
    font-size: 32px;
    /* margin-left: 110px; */
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;

}
.song-title span{
    font-size: 16px;
    font-weight: 300;
    font-style: italic;
}
.controls{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 15px;
}
button{
    appearance: none;
    background: none;
    border: none;
    outline: none;
}
.play{
    font-size: 26px;
    font-weight: 700;
    padding: 35px 25px;
    margin: 0px 15px;
    border-radius: 100px;
    color: #ffffff;
    background-color: #cc2e5d;
    transition-duration: 0.5s;
}
.play:hover{
    color: #ffffff;
    background-color: #2a13ff;
    transform: scale(1.2);
    transition-duration: 0.5s;
}
.pause{
    font-size: 26px;
    font-weight: 700;
    padding: 35px 15px;
    margin: 0px 15px;
    border-radius: 100px;
    color: #ffffff;
    background-color: #cc2e5d;
    transition-duration: 0.5s;
}
.pause:hover{
    color: #ffffff;
    background-color: #2a13ff;
    transform: scale(1.2);
    transition-duration: 0.5s;
}
.next, .prev{
    font-size: 16px;
    font-weight: 500;
    padding: 0px 0px;
    margin: 0px 25px;
    color: #2a13ff;
    transition-duration: 0.5s;
}
.next:hover, .prev:hover{
    color: #cc2e5d;
    transform: scale(1.5);
    transition-duration: 0.5s;
}
.playlist{
    padding: 0px 30px;
}
.playlist h3{
    color: #2a13ff;
    font-size: 42px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
}
.playlist .song{
    display: block;
    width: 100%;
    padding: 15px;
    font-size: 20px;
    font-weight: 500;
    color: #cc2e5d;
}
.playlist .song:hover {
    color: #2a13ff;
}
/* .playlist .song:hover{
    color:#2a13ff;
} */
.playlist .playing {
    color: #ffffff;
    display: block;
    width: 100%;
    padding: 15px;
    font-size: 20px;
    font-weight: 500;
    background-image: linear-gradient(to right, #cc2e5d, #2a13ff);
}
</style>
<!-- Style ends -->