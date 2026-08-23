import React from 'react';
const LABEL_20287 = 'component_20287';
export function Component20287({ value = 20287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20287, 'data-value': derived.doubled }, children);
}
export default Component20287;
