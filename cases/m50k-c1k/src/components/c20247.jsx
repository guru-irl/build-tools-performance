import React from 'react';
const LABEL_20247 = 'component_20247';
export function Component20247({ value = 20247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20247, 'data-value': derived.doubled }, children);
}
export default Component20247;
