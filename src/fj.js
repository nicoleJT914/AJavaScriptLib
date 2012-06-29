var fj = {
    developing:true,
    developTip:[],
    init:function() {
        
    }
}

fj.dom = {
    last:function(node){
        var tempNode = node.parentNode.lastChild
        if(!!tempNode && tempNode.nodeType !== 1){
            tempNode = this.previous(tempNode)
        }
        return tempNode
    },
    first:function(node){
        var tempNode = node.parentNode.firstChild
        if(!!tempNode && tempNode.nodeType !== 1){
            tempNode = this.next(tempNode)
        }
        return tempNode
    },
    previous:function(node){
        var tempNode = node.previousSibling
        while( !!tempNode && tempNode.nodeType !== 1){
            tempNode = tempNode.previousSibling
        } 
        return tempNode
    },
    next:function(node){
        var tempNode = node.nextSibling
        while( !!tempNode && tempNode.nodeType !== 1){
            tempNode = tempNode.nextSibling
        } 
        return tempNode
    },

    getText:function(node){
        if( !node.hasChildNodes() ) return false
        var tempNode = node.firstChild
        while( !!tempNode && ( tempNode.nodeType != 3 || /^\s+$/.test(tempNode.nodeValue) )){
            tempNode = tempNode.nextSibling
        }
        return tempNode.nodeValue || false
    },
    setText:function(node,text){
        if( !node.hasChildNodes() ) return false
        var tempNode = node.firstChild
        while( !!tempNode && ( tempNode.nodeType != 3 || /^\s+$/.test(tempNode.nodeValue) )){
            tempNode = tempNode.nextSibling
        }
        if( !!tempNode ) return tempNode.nodeValue = text
        else return false
    },
    
    createTextElement:function(elementName,text){
        var element = document.createElement(elementName.toLowerCase())
        element.appendChild(document.createTextNode(text))
        return element
    },
    createLink:function(href, text){
        var link = this.createTextElement('a',text)
        link.setAttribute('href',href)
        return link
    }
}
fj.event = {
    getKeyCode:function(e){},
    getTarget:function(e){},
    stopBubble:function(e){},
    preventDefault:function(e){},
    add:function(node,eventType,fn){}
}
fj.css = {
    swap:function(node,oldCssClass,newCssClass){},
    add:function(node,cssClass){},
    remove:function(node,cssClass){},
    check:function(node,cssCLass){}
}
fj.develop = {
    init:function(){
        if(!fj.developing){
            return
        }
        fj.event.add(window,'error',function(e){
            var event = fj.event.getTarget(e)
            var msg = (new Date()-0) + ': ' + event
            console.log(msg)
            fj.developTip.push(msg)
        })
    }
}
void function(){
    fj.init()
}()