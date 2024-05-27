import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";
import { getProductById } from "../services/productServices";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext"; // Importa o contexto de autenticação
import { useCart } from "../contexts/CartContext";

import '../css/ProductDetails.css';

const ProductDetails = () => {
    const { idProduct } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const { addToCart } = useCart();
    const { user } = useAuth(); // Obtém o estado do usuário do contexto de autenticação

    useEffect(() => {
        if (idProduct) {
            const fetchProduct = async () => {
                try {
                    const productData = await getProductById(idProduct);
                    setProduct(productData);
                } catch (error) {
                    console.error("Falha ao carregar o produto", error);
                }
            };

            fetchProduct();
        }
    }, [idProduct]);

    if (!product) {
        return <p>Produto não encontrado</p>;
    }

    const handleAddToCart = () => {
        if (user) { // Verifica se o usuário está logado antes de adicionar ao carrinho
            addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 });
            alert("Produto adicionado ao carrinho!")
        } else {
            // Exibe uma mensagem se o usuário não estiver logado
            alert("Você precisa estar logado para adicionar itens ao carrinho.");
            // Você pode redirecionar para a página de login assim:
            // history.push("/login");
        }
    };

    return (
        <Container>
            <Row className="mt-5">
                <Col className="d-flex flex-column justify-content-center alig">
                    <h2>{product.name}</h2>
                    <h3>R$ {product.price}</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Vestibulum sed laoreet enim, sit amet sagittis
                        lectus. Donec ac vulputate dui. Donec non metus
                        eleifend, tincidunt justo ac, semper ante.
                        Suspendisse et finibus nunc. Donec quis urna
                        maximus, mattis ex quis, interdum metus. Phasellus
                        rhoncus in ligula nec scelerisque. Maecenas a
                        viverra urna, in egestas ligula. Duis sodales mauris
                        nec tellus vehicula, sit amet mattis nunc molestie.
                        Cras sem quam, imperdiet non consequat id, pharetra
                        et sem. Cras id fringilla tortor.
                    </p>
                </Col>
                <Col className="image">
                    <Image src={product.image} className="product" />
                </Col>
            </Row>
            <Row>
                <Button
                    onClick={handleAddToCart}
                    className="btn-success"
                    style={{
                        width: 200,
                        backgroundColor: "#3AA39F",
                        borderRadius: 3,
                        borderColor: "#3AA39F",
                        padding: 10,
                    }}
                >
                    Adicionar ao Carrinho
                </Button>
            </Row>
        </Container>
    );
};

export default ProductDetails;
