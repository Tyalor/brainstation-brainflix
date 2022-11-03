import './VideoDesc.scss'
import views from '../../assets/svgs/views.svg'
import likes from '../../assets/svgs/likes.svg'

const VideoDesc = () => {
    return (
        <div className="desc">
            <h1 className="desc__title">BMX Rampage: 2021 Highlights</h1>
            <div className="desc__meta">
                <div className="desc__meta-left">
                    <h4 className="desc__user">By Red Crow</h4>
                    <p className="desc__date">07/11/2021</p>
                </div>
                <div className="desc__meta-right">
                    <p className="desc__views"><img className="desc__icon" src={views} alt="views" />1,001,023</p>
                    <p className="desc__likes"><img className="desc__icon" src={likes} alt="likes" />110,985</p>
                </div>
            </div>
            <hr className="desc__hr"/>
            <p className="desc__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit accusantium rerum incidunt ullam accusamus similique quo! Ab corrupti rem non aut ratione ipsum minus dolore at, minima laudantium repudiandae repellat corporis quasi aliquid, cumque dignissimos quas totam fugit explicabo error! Quod earum amet excepturi sed delectus similique sit cum explicabo?</p>
        </div>
    )
}

export { VideoDesc }