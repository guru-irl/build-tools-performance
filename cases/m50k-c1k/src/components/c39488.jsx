import React from 'react';
const LABEL_39488 = 'component_39488';
export function Component39488({ value = 39488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39488, 'data-value': derived.doubled }, children);
}
export default Component39488;
