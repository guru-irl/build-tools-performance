import React from 'react';
const LABEL_2934 = 'component_2934';
export function Component2934({ value = 2934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2934, 'data-value': derived.doubled }, children);
}
export default Component2934;
