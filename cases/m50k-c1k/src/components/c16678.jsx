import React from 'react';
const LABEL_16678 = 'component_16678';
export function Component16678({ value = 16678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16678, 'data-value': derived.doubled }, children);
}
export default Component16678;
