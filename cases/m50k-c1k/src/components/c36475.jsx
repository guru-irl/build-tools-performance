import React from 'react';
const LABEL_36475 = 'component_36475';
export function Component36475({ value = 36475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36475, 'data-value': derived.doubled }, children);
}
export default Component36475;
