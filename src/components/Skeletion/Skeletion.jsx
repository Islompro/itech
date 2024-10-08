
import './Skeletion.css'; // Ensure you have the correct CSS for styling the skeletons

const SkeletonComp = ({ cards }) => {
    return (
        <div className='max-sm:max-w-[95%]'>
            {/* <h1 className='text-blue-500'>Loading...</h1> */}
            <div className='flex max-sm:flex max-sm:flex-wrap max-sm:justify-around max-sm:left-[-2%] max-sm:relative'>
                {Array.from({ length: cards }).map((_, index) => (
                    <div key={index}>
                        <div className="skeleton-card rounded max-sm:rounded m-[10px]">
                            <div className="skeleton-image bg-gray-200 rounded-t"></div>
                            <div className="skeleton-content p-5">
                                <div className="skeleton-title bg-gray-200 h-6 w-3/4 mb-3"></div>
                                <div className="skeleton-text bg-gray-200 h-4 w-full mb-3"></div>
                                <div className="skeleton-price bg-gray-200 h-6 w-1/2 mb-3"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkeletonComp;
