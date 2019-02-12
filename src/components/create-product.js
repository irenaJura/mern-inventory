import React, { Component } from 'react';

export default class CreateProduct extends Component {

    constructor(props) {
        super(props);

        this.onChangeProductStatus = this.onChangeProductStatus.bind(this);
        this.onChangeProductSku = this.onChangeProductSku.bind(this);
        this.onChangeProductCondition = this.onChangeProductCondition.bind(this);
        this.onChangeClientCode = this.onChangeClientCode.bind(this);
        this.onChangeProductTitle = this.onChangeProductTitle.bind(this);
        this.onChangeProductBrand = this.onChangeProductBrand.bind(this);
        this.onChangeModelNumber = this.onChangeModelNumber.bind(this);
        this.onChangeProductDimensions = this.onChangeProductDimensions.bind(this);
        this.onChangeProductWeight = this.onChangeProductWeight.bind(this);
        this.onChangeProductQuantity = this.onChangeProductQuantity.bind(this);
        this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            product_status: '',
            product_sku: '',
            product_condition: '',
            client_code: '',
            product_title: '',
            product_brand: '',
            model_number: '',
            product_dimensions: '',
            product_weight: '',
            product_quantity: '',
            product_category: '',
            product_completed: false
        }
    }

    onChangeProductStatus(e) {
        this.setState({
            product_status: e.target.value
        });
    }

    onChangeProductSku(e) {
        this.setState({
            product_sku: e.target.value
        });
    }

    onChangeProductCondition(e) {
        this.setState({
            product_condition: e.target.value
        });
    }

    onChangeClientCode(e) {
        this.setState({
            client_code: e.target.value
        });
    }

    onChangeProductTitle(e) {
        this.setState({
            product_title: e.target.value
        });
    }

    onChangeProductBrand(e) {
        this.setState({
            product_brand: e.target.value
        });
    }

    onChangeModelNumber(e) {
    	this.setState({
    		model_number: e.target.value
    	})
    }

    onChangeProductDimensions(e) {
        this.setState({
            product_dimensions: e.target.value
        });
    }

    onChangeProductWeight(e) {
        this.setState({
            product_weight: e.target.value
        });
    }

    onChangeProductQuantity(e) {
        this.setState({
            product_quantity: e.target.value
        });
    }

    onChangeProductCategory(e) {
    	this.setState({
    		product_category: e.target.value
    	})
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Product status: ${this.state.product_status}`);
        console.log(`Product SKU: ${this.state.product_sku}`);
        console.log(`Product condition: ${this.state.product_condition}`);
        console.log(`Client code: ${this.state.client_code}`);
        console.log(`Product title: ${this.state.product_title}`);
        console.log(`Product brand: ${this.state.product_brand}`);
        console.log(`Model Number: ${this.state.model_number}`);
        console.log(`Dimensions: ${this.state.product_dimensions}`);
        console.log(`Weight: ${this.state.product_weight}`);
        console.log(`Product quantitiy: ${this.state.product_quantity}`);
        console.log(`category: ${this.state.product_category}`);
        
        this.setState({
            product_status: '',
            product_sku: '',
            product_condition: '',
            client_code: '',
            product_title: '',
            product_brand: '',
            model_number: '',
            product_dimensions: '',
            product_weight: '',
            product_quantity: '',
            product_category: '',
            product_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Product</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Status: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.product_status}
                                onChange={this.onChangeProductStatus}
                                />
                    </div>
                    <div className="form-group">
                        <label>SKU: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.product_sku}
                                onChange={this.onChangeProductSku}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="conditionOptions" 
                                    id="conditionNew" 
                                    value="New"
                                    checked={this.state.product_condition==='New'} 
                                    onChange={this.onChangeProductCondition}
                                    />
                            <label className="form-check-label">New</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="conditionOptions" 
                                    id="conditionUsed" 
                                    value="Used" 
                                    checked={this.state.product_condition==='Used'} 
                                    onChange={this.onChangeProductCondition}
                                    />
                            <label className="form-check-label">Used</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Client code: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.client_code}
                                onChange={this.onChangeClientCode}
                                />
                    </div>

                    <div className="form-group">
                        <label>Title: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.product_title}
                                onChange={this.onChangeProductTitle}
                                />
                    </div>

                    <div className="form-group">
                        <label>Brand: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.product_brand}
                                onChange={this.onChangeProductBrand}
                                />
                    </div>

                    <div className="form-group">
                        <label>Model Number: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.model_number}
                                onChange={this.onChangeModelNumber}
                                />
                    </div>

                    <div className="form-group">
                        <label>Dimensions: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.product_dimensions}
                                onChange={this.onChangeProductDimensions}
                                />
                    </div>

                    <div className="form-group">
                        <label>Weight: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.product_weight}
                                onChange={this.onChangeProductWeight}
                                />
                    </div>

                    <div className="form-group">
                        <label>Quantity: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.product_quantity}
                                onChange={this.onChangeProductQuantity}
                                />
                    </div>

                    <div className="form-group">
                        <label>Category: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.product_category}
                                onChange={this.onChangeProductCategory}
                                />
                    </div>


                    

                    <div className="form-group">
                        <input type="submit" value="Create Product" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}