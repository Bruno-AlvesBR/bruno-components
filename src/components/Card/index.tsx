import { ReactNode } from "react";
import Rating from "@mui/material/Rating";
import { Star } from "@mui/icons-material";

import { Button } from "../Button";

import {
  Container,
  Content,
  ContentHeader,
  Rate,
  Category,
  Price,
  Title,
  Top,
} from "./styles";

export interface ICardProps {
  children?: ReactNode;
  title: string;
  price: number;
  category: string;
  rating: number;
  onclick(): void;
  bgColor?: string;
}

export const Card: React.FC<ICardProps> = ({
  children,
  title,
  price,
  category,
  rating,
  onclick,
  bgColor,
}) => (
  <Container>
    <ContentHeader>{children}</ContentHeader>
    <Title>{title}</Title>
    <Content>
      <Top>
        <Price>
          <span>Preço:</span> R$ {price},00
        </Price>
        <Category>
          <span>Categoria:</span> {category}
        </Category>
      </Top>
      <Rate>
        <span>Avaliação:</span>{" "}
        <Rating
          value={rating}
          precision={0.5}
          readOnly
          icon={<Star style={{ color: "#d3fd00" }} />}
          emptyIcon={<Star style={{ color: "#aaa" }} />}
        />
      </Rate>
    </Content>
    <Button
      message="editar"
      onclick={onclick}
      bgColor={bgColor}
    />
  </Container>
);
