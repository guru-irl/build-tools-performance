import React from 'react';
const LABEL_39449 = 'component_39449';
export function Component39449({ value = 39449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39449, 'data-value': derived.doubled }, children);
}
export default Component39449;
