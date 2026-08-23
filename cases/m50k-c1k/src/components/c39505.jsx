import React from 'react';
const LABEL_39505 = 'component_39505';
export function Component39505({ value = 39505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39505, 'data-value': derived.doubled }, children);
}
export default Component39505;
