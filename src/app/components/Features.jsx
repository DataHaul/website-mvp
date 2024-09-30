import React from 'react';
import { Button, Container } from '@mui/material';

const Features = () => {
  return (
    <Container>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Feature 1 */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-left">
        <h3 className="text-2xl font-semibold text-green-600 mb-3">Predictive Analytics</h3>
        <p className="text-gray-600">
          Leverage advanced analytics to get insights into crop prices, market trends, and logistics.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-left">
        <h3 className="text-2xl font-semibold text-green-600 mb-3">Digital Marketplace</h3>
        <p className="text-gray-600">
          A platform to source farm inputs, capital investment tools, and resources from suppliers.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white shadow-lg rounded-lg p-6 text-left">
        <h3 className="text-2xl font-semibold text-green-600 mb-3">Community Forum</h3>
        <p className="text-gray-600">
          Join an interactive space for farmers to share experiences, get support, and collaborate on sustainability.
        </p>
      </div>
    </div>
    </Container>
  );
};

export default Features;
