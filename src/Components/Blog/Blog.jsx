import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleBookmarks,handleMarkAsRead}) => {
    const {title,cover,reading_time,author_img,author,posted_date,hashtags}=blog;
    return (
        <div className='mb-20 space-y-4'>
            
            <img  className='w-full mb-8 rounded-xl' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                     <h2 className="text-2xl">{author}</h2>
                     <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} minute read</span>
                    <button onClick={()=>handleBookmarks(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
            <p>{
            hashtags.map((hash,idx)=><span key={idx}><a href='' className='ml-2'>#{hash}</a></span>)
                }</p>
                <button
                onClick={()=>handleMarkAsRead(reading_time)} 
                className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleBookmarks:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;