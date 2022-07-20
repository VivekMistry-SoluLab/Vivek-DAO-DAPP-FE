const VoteModal = (props) => {
  const { setShowModal, voteFor } = props;
  const handleSubmit = () => {
    //write submit code here
    setShowModal(false);
  };
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-800 outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5  border-gray-300 rounded-t self-center">
            <span className="text-xl text-white">Vote Overview</span>
          </div>
          <div className="relative py-1 px-5 flex-auto">
            <div className="mx-auto max-w-2xl mb-5 text-lg font-medium rounded-lg border border-gray-600 text-white">
              <div className="px-6 pt-6 pb-8" style={{ width: 450 }}>
                <div className="w-full flex justify-between">
                  <span className="text-base text-gray-300">Option(s)</span>
                  <span className="text-base">{voteFor}</span>
                </div>
                <div className="w-full flex justify-between">
                  <span className="text-base text-gray-300">Snapshot</span>
                  <span className="text-base">10,000</span>
                </div>
                <div className="w-full flex justify-between">
                  <span className="text-base text-gray-300">
                    Your Voting Power
                  </span>
                  <span className="text-base">0 CAKEVO...</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-around p-6 border-t border-gray-600 rounded-b">
              <button
                className="text-white w-40 background-transparent rounded-full border border-gray-600 font-bold px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="text-white w-40 border border-gray-600 bg-slate-700 active:bg-gray-700 font-bold text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={handleSubmit}
              >
                Vote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoteModal;
