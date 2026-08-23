import React from 'react';
const LABEL_24236 = 'component_24236';
export function Component24236({ value = 24236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24236, 'data-value': derived.doubled }, children);
}
export default Component24236;
