import React from 'react';
const LABEL_10163 = 'component_10163';
export function Component10163({ value = 10163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10163, 'data-value': derived.doubled }, children);
}
export default Component10163;
