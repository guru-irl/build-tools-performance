import React from 'react';
const LABEL_6454 = 'component_6454';
export function Component6454({ value = 6454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6454, 'data-value': derived.doubled }, children);
}
export default Component6454;
