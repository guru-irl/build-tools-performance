import React from 'react';
const LABEL_2804 = 'component_2804';
export function Component2804({ value = 2804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2804, 'data-value': derived.doubled }, children);
}
export default Component2804;
