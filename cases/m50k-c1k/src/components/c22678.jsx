import React from 'react';
const LABEL_22678 = 'component_22678';
export function Component22678({ value = 22678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22678, 'data-value': derived.doubled }, children);
}
export default Component22678;
