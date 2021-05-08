import React, { Component } from 'react';

class chat extends Component {
    render() {
        // console.log(this.props.userName)
        return (

            <div class="container-fluid height">
                <div class="row justify-content-center height ">
                              {/* cuandro de la izquierda */}
				<div class="col-md-2 col-xl-2 chat"><div class="card mb-sm-2 mb-md-0 contacts_card">
					<div class="card-header">
                    <div class="input-group">
                    <input type="text" placeholder="Search..." name="" class="form-control search"/>
							<div class="input-group-prepend">
								<span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
							</div>
						</div>
					</div>
					<div class="card-body contacts_body">
						<ui class="contacts">
						<li >
							<div class="d-flex bd-highlight">
								<div class="img_cont">
						
                                <img src="https://www.lifeder.com/wp-content/uploads/2017/03/anonymus.png" class="user_img rounded-circle"/>
								</div>
								<div class="user_info">
									<span>Michelle</span>
		
								</div>
							</div>
						</li>
						<li>
							<div class="d-flex bd-highlight">
								<div class="img_cont">
					
                                <img src="https://www.lifeder.com/wp-content/uploads/2017/03/anonymus.png" class="user_img rounded-circle"/>
								</div>
								<div class="user_info">
									<span>Berlin</span>
						
								</div>
							</div>
						</li>
						<li>
							<div class="d-flex bd-highlight">
								<div class="img_cont">
								
                                <img src="https://www.lifeder.com/wp-content/uploads/2017/03/anonymus.png" class="user_img rounded-circle"/>
								</div>
								<div class="user_info">
									<span>thiago</span>
					
								</div>
							</div>
						</li>
						<li>
							<div class="d-flex bd-highlight">
								<div class="img_cont">
                                <img src="https://www.lifeder.com/wp-content/uploads/2017/03/anonymus.png" class="user_img rounded-circle"/>
		
								</div>
								<div class="user_info">
									<span>Dennis</span>
		
								</div>
							</div>
						</li>
						<li>
							<div class="d-flex bd-highlight">
								<div class="img_cont">
								
                                <img src="https://www.lifeder.com/wp-content/uploads/2017/03/anonymus.png" class="user_img rounded-circle"/>
								</div>
								<div class="user_info">
									<span>Luis</span>
						
								</div>
							</div>
						</li>
						</ui>
					</div>
					<div class="card-footer"></div>
				</div></div>
          {/* cuandro de la derecha */}
				<div class="col-md-10 col-xl-8 chat">
					<div class="card">
						<div class="card-header msg_head">
							<div class="d-flex bd-highlight">
								<div class="img_cont">
									
                                <img src="https://www.lifeder.com/wp-content/uploads/2017/03/anonymus.png" class="user_img rounded-circle"/>
								</div>
								<div class="user_info">
									<span>{this.props.userName}</span>
								
								</div>
							
							</div>
						
						</div>
						<div class="card-body msg_card_body">
							<div class="d-flex justify-content-start mb-4">
							
								<div class="msg_cotainer">
									Hi, how are you samim?
									<span class="msg_time">8:40 AM, Today</span>
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									Hi Khalid i am good tnx how about you?
									<span class="msg_time_send">8:55 AM, Today</span>
								</div>
							
							</div>
							<div class="d-flex justify-content-start mb-4">
							
								<div class="msg_cotainer">
									I am good too, thank you for your chat template
									<span class="msg_time">9:00 AM, Today</span>
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									You are welcome
									<span class="msg_time_send">9:05 AM, Today</span>
								</div>
							
							</div>
							<div class="d-flex justify-content-start mb-4">
						
								<div class="msg_cotainer">
									I am looking for your next templates
									<span class="msg_time">9:07 AM, Today</span>
								</div>
							</div>
							<div class="d-flex justify-content-end mb-4">
								<div class="msg_cotainer_send">
									Ok, thank you have a good day
									<span class="msg_time_send">9:10 AM, Today</span>
								</div>
							
							</div>
							<div class="d-flex justify-content-start mb-4">
							
								<div class="msg_cotainer">
									Bye, see you
									<span class="msg_time">9:12 AM, Today</span>
								</div>
							</div>
						</div>
						<div class="card-footer">
							<div class="input-group">
							
								<textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
								<div class="input-group-append">
									<span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
                   /*  <div>
                <h1>You made it to CHATS!</h1>
                <div className="onlineUsers">
                    <ul>
                        <li>{this.props.userName}</li>
                    </ul>
                </div>
                <div className="msgField">

                </div>
                <input type="text" />
                <button type="submit" >Send</button>
            </div> */
    
        );
    }
}

export default chat;