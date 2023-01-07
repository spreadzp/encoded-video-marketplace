type ProgressBarProps = {
    progressPercentage: number
    processName: string
}

function ProgressBar ({ progressPercentage, processName }: ProgressBarProps)  {
    return (
        <>
        
        <div className='h-1 w-full bg-gray-300'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={`h-full ${
                    progressPercentage < 70 ? 'bg-red-600' : 'bg-green-600'}`}>
            </div>
            <div className="h-1 text-white">{processName}: {progressPercentage}%</div>
        </div>
        </>
    );
};
 

export default ProgressBar;