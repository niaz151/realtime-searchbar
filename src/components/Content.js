import React from 'react';

class Content extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        let data = [
            { name: 'Backbone.js', url: 'https://documentcloud.github.io/backbone/'},
            { name: 'AngularJS', url: 'https://angularjs.org/'},
            { name: 'jQuery', url: 'https://jquery.com/'},
            { name: 'Prototype', url: 'http://www.prototypejs.org/'},
            { name: 'React', url: 'https://facebook.github.io/react/'},
            { name: 'Ember', url: 'http://emberjs.com/'},
            { name: 'Knockout.js', url: 'https://knockoutjs.com/'},
            { name: 'Dojo', url: 'http://dojotoolkit.org/'},
            { name: 'Mootools', url: 'http://mootools.net/'},
            { name: 'Underscore', url: 'https://documentcloud.github.io/underscore/'},
            { name: 'Lodash', url: 'http://lodash.com/'},
            { name: 'Moment', url: 'https://momentjs.com/'},
            { name: 'Express', url: 'http://expressjs.com/'},
            { name: 'Koa', url: 'http://koajs.com/'},
        ]

        let query = this.props.query.toLowerCase();
        let content = data.map( item => item.name.toLowerCase().includes(query) ?
            <li> {item.name} </li> : null
        )

        return(
            <div className='content'>
                {content}
            </div>
        )
    }
}

export default Content;