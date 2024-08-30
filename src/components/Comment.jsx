/* eslint react/prop-types: 0 */

import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(props) {
    function handleDeleteComment() {
        console.log('deletar')
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Projeto-ZeuS.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Adriano Moreira</strong>
                            <time title="20 de Agosto às 11:58" dateTime="2024-08-20 11:58:00">Comentado há 1 hora</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}