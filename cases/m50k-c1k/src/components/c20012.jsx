import React from 'react';
const LABEL_20012 = 'component_20012';
export function Component20012({ value = 20012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20012, 'data-value': derived.doubled }, children);
}
export default Component20012;
