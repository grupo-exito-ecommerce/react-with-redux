import React, { FC, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './styles.module.scss';
import { Character } from '@shared/index';
import { Title } from '@shared/index';
export interface PageProps {
  characters: Character[];
}

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    marginBottom: '10px'
  },
  media: {
    height: 200
  }
});

const CardItem = (item: Character) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={item.image} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" color="textSecondary">
            {item.name}
          </Typography>

          {item.origin && item.origin.name && (
            <Typography variant="subtitle2" color="textSecondary">
              Origen: {item.origin.name}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Page: FC<PageProps> = memo(props => {
  const { characters } = props;
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <Title tag="h5" label="Personajes de Rick And Morty" />
      </div>
      <div className={styles.characters}>{characters.map(item => CardItem(item))}</div>
    </div>
  );
});

export default Page;
