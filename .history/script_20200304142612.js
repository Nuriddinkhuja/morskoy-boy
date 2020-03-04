const record = document.getElementById('record');
const shot = document.getElementById('shot');
const hit = document.getElementById('hit');
const dead = document.getElementById('dead');

const enemy = document.getElementById('enemy');
const again = document.getElementById('again');

const play = {
    record: 0,
    shot: 0,
    hit: 0,
    dead: 0,
    render(){
        record.textContent = this.record;
        shot.textContent = this.shot;
        hit.textContent = this.hit;
        dead.textContent = this.dead;
    }
};

const show = {
    hit(){

    },
    miss(element){
        this.changeClass(element, 'miss');
    },
    dead(){

    },
    changeClass(element, value){
        element.className = value
    }
}

const fire = (e) => {
    console.log(e.target);
    
    const target = e.target;
    show.miss(target);

    play.shot += 1;
};

const init = () => {
    enemy.addEventListener('click', fire);
}

init();