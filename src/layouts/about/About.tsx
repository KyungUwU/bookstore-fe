import React from "react";
import useScrollToTop from "../../hooks/ScrollToTop";

function About() {
	useScrollToTop(); // Mỗi lần vào component này thì sẽ ở trên cùng
	return (
		<div className='w-100 h-100 d-flex align-items-center justify-content-center flex-column m-5'>
			<div className='w-50 h-50 p-3 rounded-5 shadow-4-strong bg-light'>
				<h3 className='text-center text-black'>Giới thiệu về ZoiBook</h3>
				<hr />
				<div className='row'>
					<div className='col-lg-8'>
						<p>
							<strong>Tên website: </strong>ZoiBook
						</p>
						<p>
							<strong>Địa chỉ: </strong>Khu phố 6, TP Thủ Đức, Ho Chi Minh City, Vietnam
						</p>
						<p>
							<strong>Số điện thoại: </strong>0793621223
						</p>
						<p>
							<strong>Email: </strong>zoibook-store@gmail.com
						</p>
					</div>
					<div className='col-lg-4'>
						<div
							className='d-flex align-items-center justify-content-center rounded-5'
							style={{ border: "1px solid #ccc" }}
						>
							<img
								src={"./../../../images/public/logo.svg"}
								width='150'
								alt='MDB Logo'
								loading='lazy'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='w-50 h-50 p-3 rounded-5 shadow-4-strong bg-light mt-3'>
				<h3 className='text-center text-black'>Google maps</h3>
				<hr />
				<div className='d-flex align-items-center justify-content-center'>
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.131719788719!2d106.79903931137046!3d10.877584789232737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a415a9d221%3A0x550c2b41569376f9!2sInternational%20University%20-%20VNU-HCM!5e0!3m2!1sen!2s!4v1748631316599!5m2!1sen!2s" 
									width="600" 
									height="450" 
									style={{ border: 0 }} 
									allowFullScreen={true} 
									loading="lazy" 
									referrerPolicy="no-referrer-when-downgrade">
							</iframe>
				</div>
			</div>
		</div>
	);
}

export default About;
