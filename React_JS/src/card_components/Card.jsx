import ProfilePic from './assets/profile.png'
function Card() {

    return(

        <div className="card">
            <img className="card-image" src={ProfilePic} alt="My_Profile_Pic" />
            <h2 className="card-title">Nandy</h2>
            <p className='card-text'>I am Junior Data Scientist at Meta</p>
        </div>
    );
}

export default Card;