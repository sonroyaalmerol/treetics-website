import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import WP from 'utils/wordpress';

import Banner from 'components/home/banner';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    width: '80%',
    margin: 'auto'
  },
  spacer: {
    height: 100
  },
  rootContainer: {
    width: '100%',
    marginBottom: 80
  }
}));

const List = ({ posts, users }) => {
  // Get the data of the current list.
  
  const classes = useStyles();

  return (
    <div className={classes.rootContainer}>
      <Banner />
    </div>
  );
};

export async function getStaticProps(ctx) {
  try {
    const [res, users] = await Promise.all([
      WP.posts(),
      WP.users()
    ]);
    if (res) { 
      return { props: { posts: res, users }, revalidate: 10 };
    } else {
      return { props: { posts: [], users }, revalidate: 10 };
    }
  } catch (err) {
    return { props: { posts: [], users: [] }, revalidate: 10 };
  }
}

export default List;
