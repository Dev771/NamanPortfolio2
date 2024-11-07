// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TimeConverter = ({ inputTime }: { inputTime: any }) => {

    const formattedTime = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true, 
    }).format(inputTime);

    return <time>{formattedTime}</time>;
};
  
export default TimeConverter;