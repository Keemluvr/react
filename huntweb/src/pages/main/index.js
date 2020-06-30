import React, { Component } from "react";
import api from "../../services/config";

export default class Main extends Component {
    componentDidMount() {
        this.loadProducts()
    }

    loadProducts = async () => {
        const response = await api.get(`/products`)
        console.table(response.data.docs)
    }

    render() {
        return <h1>Teste</h1>
    }
}