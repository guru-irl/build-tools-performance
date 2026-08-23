import React from 'react';
const LABEL_39083 = 'component_39083';
export function Component39083({ value = 39083, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39083, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39083, 'data-value': derived.doubled }, children);
}
export default Component39083;
