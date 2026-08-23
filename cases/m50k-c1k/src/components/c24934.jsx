import React from 'react';
const LABEL_24934 = 'component_24934';
export function Component24934({ value = 24934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24934, 'data-value': derived.doubled }, children);
}
export default Component24934;
