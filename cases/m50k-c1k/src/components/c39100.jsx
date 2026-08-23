import React from 'react';
const LABEL_39100 = 'component_39100';
export function Component39100({ value = 39100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39100, 'data-value': derived.doubled }, children);
}
export default Component39100;
