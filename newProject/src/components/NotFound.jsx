import React from 'react'

function NotFound() {
  return (
    <div className="bg-gray-200 w-1/2 mx-auto my-6 p-4 rounded-md">
      <h2 className="text-3xl font-bold mb-2">❌ 404 Page Not Found </h2>
      <p className="text-sm">You are using a wrong address. There is no page for this address in the addressbar.</p>
      <p className="">Please try again!</p>
    </div>
  );
}

export default NotFound