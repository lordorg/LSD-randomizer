$(document).ready(() => {
    const DOMItems = [
        'btnAdd',
        'btnRandomize',
        'inpName',
        'body'
    ]
    
    const app = new Vue({
        el: '#app',
        data: {
            list: []
        }
    })
    
    app.addToList = () => {
        const input = document.getElementById('inpName')
    
        if (input.value.length > 0) {
            app.list.push(input.value)
            input.value = ''
        }
    }
    
    app.randomize = () => {
        var currentIndex = app.list.length, temporaryValue, randomIndex;
          
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element.
            temporaryValue = app.list[currentIndex];
            app.list[currentIndex] = app.list[randomIndex];
            app.list[randomIndex] = temporaryValue;
        }     
    
        app.$forceUpdate()
        app.randomizeColors()
    }
    
    app.randomizeColors= () => {
        for (item of DOMItems) {
            let element = document.getElementById(item)
            element.style.backgroundColor = getRandomColor()
            element.style.borderColor = getRandomColor()
            element.style.color = getRandomColor()
            element.style.borderWidth = Math.random() * 20 + 'px'
        }
    
        let listItems = $('.list-item')

        for (item of listItems) {
            item.style.borderColor = getRandomColor()
            item.style.color = getRandomColor()
            item.style.border = `${Math.random() * 20}px solid ${getRandomColor()}`
            item.style.backgroundColor = getRandomColor()
            item.style.marginTop = `${Math.random() * 100}px`

            if (Math.random() < 0.5)
                item.style.borderRadius = `${Math.random() * 50}px`
            else
                item.style.borderRadius = `${Math.random() * 100}%`
        }
        
    }
    
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    $('#inpName').on('keypress', (e) => {
        if (e.which === 13) {
            app.addToList()
        }
    })
})
