import React from 'react';
const LABEL_20371 = 'component_20371';
export function Component20371({ value = 20371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20371, 'data-value': derived.doubled }, children);
}
export default Component20371;
