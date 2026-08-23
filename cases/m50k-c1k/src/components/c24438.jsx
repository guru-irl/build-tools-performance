import React from 'react';
const LABEL_24438 = 'component_24438';
export function Component24438({ value = 24438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24438, 'data-value': derived.doubled }, children);
}
export default Component24438;
