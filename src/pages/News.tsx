import React, { FC } from "react";
import { Container, Grid } from "@mui/material";
import NewsCard from "../components/NewsCard";
import { useTasks } from "../hooks/useNews";

const News: FC = () => {
  const { data } = useTasks();

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {data?.articles.map((item: any, index: number) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <NewsCard
                title={item.title}
                content={item.description}
                urlToImage={item.urlToImage}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default News;
