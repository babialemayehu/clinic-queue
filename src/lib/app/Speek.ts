import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class Speek{
    
    constructor( private msg = new SpeechSynthesisUtterance(), private voices = speechSynthesis.getVoices()){
        speechSynthesis.addEventListener('voiceschanged',() => {
            this.voices = speechSynthesis.getVoices(); 
       }); 
    }
    
    speek(messege: string){
        this.msg.rate = 50; 
        if(this.voices.length > 0)
            this.msg.voice = this.voices[0]; 
        this.msg.text = messege; 
        speechSynthesis.speak(this.msg); 
    }
}