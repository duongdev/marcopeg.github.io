import React from 'react'
import moment from 'moment'
import { Link } from 'gatsby'
import PostImage from '../PostImage'
import styles from './Feed.module.scss'

const Feed = ({ edges }) => (
    <div className={styles['feed']}>
        {edges.map((edge) => (
            <div className={styles['feed__item']} key={edge.node.fields.slug}>
                <div className={styles['feed__item-image']}>
                    {edge.node.fields.image && (
                        <PostImage
                            src={edge.node.fields.image}
                            width={50}
                        />
                    )}
                </div>
                <div className={styles['feed__item-content']}>
                    <div className={styles['feed__item-meta']}>
                        <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}>
                            {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
                        </time>
                        <span className={styles['feed__item-meta-divider']} />
                        <span className={styles['feed__item-meta-category']}>
                            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
                        </span>
                    </div>
                    <h2 className={styles['feed__item-title']}>
                        <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
                    </h2>
                    <p className={styles['feed__item-description']} dangerouslySetInnerHTML={{ __html: edge.node.frontmatter.description} } />
                    <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>Read</Link>
                </div>
            </div>
        ))}
    </div>
)

export default Feed
