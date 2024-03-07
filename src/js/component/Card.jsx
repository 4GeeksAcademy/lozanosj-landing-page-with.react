import React from "react";

const Card = () => {
	return (
		<div class="container-fluid col-8 d-flex justify-content-center">

			<div class="col pt-2 pb-2 pe-2 mt-3">
				<div class="card h-100">
				<img src="/img/rigo-baby.jpg" class="card-img-top" alt="No entiendo" />
						<div class="card-body">
							<h5 class="card-title text-center">Card title</h5>
							<p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus unde illum quisquam obcaecati labore doloremque quod laboriosam laborum, in iure mollitia quis assumenda ab recusandae vitae deserunt. Numquam, iusto iste!</p>
						</div>
						<div class="card-footer d-flex justify-content-center">
						<a href="#" class="btn btn-primary">Find Out More!</a>
						</div>
				</div>
			</div>

			<div class="col p-2 mt-3">
				<div class="card h-100">
					<img src="..." class="card-img-top" alt="por qué"/>
						<div class="card-body">
							<h5 class="card-title text-center">Card title</h5>
							<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, placeat. Accusamus quasi ex dolor aliquam animi. Assumenda distinctio recusandae cum odit minima provident eaque, aut harum? Aliquam animi suscipit sapiente.</p>
						</div>
						<div class="card-footer d-flex justify-content-center">
						<a href="#" class="btn btn-primary">Find Out More!</a>
						</div>
				</div>
			</div>

			<div class="col p-2 mt-3">
				<div class="card h-100">
					<img src="..." class="card-img-top" alt="no salen"/>
						<div class="card-body">
							<h5 class="card-title text-center">Card title</h5>
							<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum nam vero, adipisci aliquam quasi fugiat. Esse, dolor velit adipisci magnam aut tempora nisi! Architecto aspernatur iure accusamus ipsa nisi?</p>
						</div>
						<div class="card-footer d-flex justify-content-center">
						<a href="#" class="btn btn-primary">Find Out More!</a>
						</div>
				</div>
			</div>

			<div class="col ps-2 pt-2 pb-2 mt-3">
				<div class="card h-100">
					<img src="..." class="card-img-top" alt="las imágenes"/>
						<div class="card-body">
							<h5 class="card-title text-center">Card title</h5>
							<p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam corporis doloremque est, facere similique? Quia earum, aut non ducimus repellendus blanditiis quasi nisi! Perspiciatis impedit accusantium nobis libero sequi!</p>
						</div>
						<div class="card-footer d-flex justify-content-center">
						<a href="#" class="btn btn-primary">Find Out More!</a>
						</div>
				</div>
			</div>
		</div>
	);
};

export default Card;