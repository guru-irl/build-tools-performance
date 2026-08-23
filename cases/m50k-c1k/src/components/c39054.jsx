import React from 'react';
const LABEL_39054 = 'component_39054';
export function Component39054({ value = 39054, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39054, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39054, 'data-value': derived.doubled }, children);
}
export default Component39054;
