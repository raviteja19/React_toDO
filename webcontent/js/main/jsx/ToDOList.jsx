import React from 'react';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';
import  $ from 'jquery';

class ToDOList extends React.Component {
    constructor(props) {
        super(props);
       this.state={presentState:'Add',toDO:[]};
	   this.toDoList=this.toDoList.bind(this);
	   this.addToDoList=this.addToDoList.bind(this);
	   this.changeAction=this.changeAction.bind(this);
	   this.chnageTodovalue=this.chnageTodovalue.bind(this);
	   this.deleteTodo=this.deleteTodo.bind(this);
	   this.completeTodo=this.completeTodo.bind(this);
	   }
       
	   
      
    
    componentDidMount()
    {
        var me=this;

    }
    componentDidMount()
    {	var height=window.innerHeight-90;
		var height1=window.innerHeight-50;
		
		$('#home-page').css({height:height1});
		$(document).ready(function(){

			$(window).resize(function(){
							var heights=window.innerHeight-90;
							var height1=window.innerHeight-50;

				$('#home-page').css({height:height1});
			});

		});
    }
	addToDoList(e)
	{
		e.preventDefault();
		
		var todo=[],todoInfo={todo:'to do things',action:'save',statuss:'incomplete'};
		todo=this.state.toDO;
		todo.push(todoInfo);
		this.setState({toDO:todo});
		
	}
	completeTodo(e)
	{
		e.preventDefault();
		var todo=[],id=e.target.id,buttonid;
		buttonid='#complete'+id;
		todo=this.state.toDO;
		todo[id].statuss='complete';
		this.setState({toDO:todo});
		setTimeout($(buttonid).css('display', 'none'),500);
		
		
		
	}
	deleteTodo(e)
	{
		e.preventDefault();
		var todo=[],id=e.target.id;
		todo=this.state.toDO;
		todo.splice(id, 1);
		this.setState({toDO:todo});
		
	}
	chnageTodovalue(e)
	{
		e.preventDefault();
		var id=e.target.id,todo=[],value;
		todo=this.state.toDO;
		value=e.target.value;
		todo[id].todo=value;
		this.setState({toDO:todo});
		
	}
	changeAction(e)
	{
		e.preventDefault();
		var todo=[],idValue=e.target.id;
		var a=idValue.split('-');
		var id=a[0];
		var action=a[1];
		todo=this.state.toDO;
		if(todo[id].action=='save')
		{
			let value=e.target.value;
			todo[id].action='edit';
			this.setState({toDO:todo});	
			
		}
		else
		{
			todo[id].action='save';
			this.setState({toDO:todo});	
		}
		
	}
    toDoList(info,i)
	{
		var me=this;
					const tooltip = (
			<Tooltip id="tooltip">
			<strong>Delete </strong>the toDo item from the list 
			</Tooltip>
				);
									const complete = (
			<Tooltip id="tooltip">
			<strong>Mark </strong>to complete 
			</Tooltip>
				);
	return (
			<div key={i}>
				<div className="toDOList">
					<div className="row">
						<div className="col-sm-8 col-xs-8 col-md-8 col-lg-8">
							<div className={info.statuss} style={ { display: info.action=='edit' ? 'block' : 'none' } }>
								<div className="row">
									<div className="col-sm-10 col-lg-10 col-md-10 col-lg-10">
									{info.todo}
									</div>
									<div className="col-sm-2 col-lg-2 col-md-2 col-lg-2">
										<OverlayTrigger placement="top" overlay={tooltip}>
											<div className="pull-right del" id={i} onClick={me.deleteTodo}>X</div>
										</OverlayTrigger>
									</div>
								</div>
							</div>
							<div className="toDoInput" style={ { display: info.action=='save' ? 'block' : 'none' } }>
								<input type="text" className="input" id={i} onChange={me.chnageTodovalue}/>
							</div>
						</div>
						<div className="col-sm-2 col-xs-2 col-md-2 col-lg-2">
							<button type="button" className="btn btn-success" id={i+'-'+info.action} onClick={me.changeAction}>{info.action}</button>
						</div>
						<div className="col-sm-2 col-xs-2 col-md-2 col-lg-2" id={'complete'+i} style={ { display: info.action=='edit' ? 'block' : 'none' } }>
							<button type="button" className="btn btn-success" id={i} onClick={me.completeTodo}>Completed</button>
						</div>

					</div>
				</div>
			</div>
			);	
	}

   render() {
var me=this;

         return (
<div className="container-fluid">
   <div id="home-page" className="home-page">
		<div className="row">
			<div className="col-sm-12 col-xs-12 col-md-12 col-lg-12">
				<div className="toDO">
					<div className="main">
						{this.state.toDO.map(me.toDoList)}
					</div>
					<div className="add">
						<button type="button" className="btn btn-success" id="edit" onClick={me.addToDoList}>ADD</button>
					</div>
				</div>
			</div>
		</div>
    </div>
</div>
      );
   }
}
export default ToDOList;