import React from 'react';
const LABEL_2475 = 'component_2475';
export function Component2475({ value = 2475, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2475, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2475, 'data-value': derived.doubled }, children);
}
export default Component2475;
