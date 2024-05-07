const BlockDetails = ({blocks}) => {
 
  return (
    <div>
      <h1 className='text-3xl font-bold text-center text-white bg-bgDark py-4'>Block Details</h1>
      <table className=' w-full  mx-auto flex-col flex-wrap justify-evenly items-center min-h[50vh]' >
        <thead >
          <tr className='w-full  mx-auto flex-col flex-wrap justify-evenly items-center min-h[50vh] '>
            <th className='w-6/12 text-lg px-10 py-1 rounded-md font-medium text-white '>Height</th>
            <th className='w-6/12 text-lg px-10 py-1 rounded-md font-medium text-white '>Timestamp</th>
          </tr>
        </thead>
        <tbody  >
          {blocks.map((block) => (
            <tr key={block._id}>
              <td className='w-6/12 text-lg px-10 py-1 rounded-md font-medium text-white text-center border-b border-[#9102F0] '>{block.height}</td>
              <td className='w-6/12 text-lg px-10 py-1 rounded-md font-medium text-white text-center border-b border-[#9102F0] '>{block.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlockDetails;
