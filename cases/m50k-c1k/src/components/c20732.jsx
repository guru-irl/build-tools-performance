import React from 'react';
const LABEL_20732 = 'component_20732';
export function Component20732({ value = 20732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20732, 'data-value': derived.doubled }, children);
}
export default Component20732;
