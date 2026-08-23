import React from 'react';
const LABEL_20605 = 'component_20605';
export function Component20605({ value = 20605, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20605, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20605, 'data-value': derived.doubled }, children);
}
export default Component20605;
