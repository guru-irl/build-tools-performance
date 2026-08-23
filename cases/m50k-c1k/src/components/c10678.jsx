import React from 'react';
const LABEL_10678 = 'component_10678';
export function Component10678({ value = 10678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10678, 'data-value': derived.doubled }, children);
}
export default Component10678;
