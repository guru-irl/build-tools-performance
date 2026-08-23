import React from 'react';
const LABEL_20500 = 'component_20500';
export function Component20500({ value = 20500, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20500, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20500, 'data-value': derived.doubled }, children);
}
export default Component20500;
