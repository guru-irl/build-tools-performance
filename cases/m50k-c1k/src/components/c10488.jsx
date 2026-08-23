import React from 'react';
const LABEL_10488 = 'component_10488';
export function Component10488({ value = 10488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10488, 'data-value': derived.doubled }, children);
}
export default Component10488;
