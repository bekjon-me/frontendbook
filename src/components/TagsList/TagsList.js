import axios from 'axios';
import React, { useEffect } from 'react';
import Tag from '../Tag/Tag';
import styles from './TagsList.module.scss';

export default function TagsList() {
  const [tags, setTags] = React.useState([]);

  useEffect(() => {
    axios.get('https://front-end-book.herokuapp.com/elements').then((res) => {
      setTags(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className={styles.tagList}>
      {tags.map((tag) => (
        <Tag
          key={tag.name}
          tag={tag.name}
          meta={tag.meta}
          block={tag.block}
          experimental={tag.experimental}
          inline={tag.inline}
          self_closing={tag.self_closing}
        />
      ))}
    </div>
  );
}
