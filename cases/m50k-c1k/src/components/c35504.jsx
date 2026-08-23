import React from 'react';
const LABEL_35504 = 'component_35504';
export function Component35504({ value = 35504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35504, 'data-value': derived.doubled }, children);
}
export default Component35504;
