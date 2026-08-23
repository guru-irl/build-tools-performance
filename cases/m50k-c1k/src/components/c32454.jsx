import React from 'react';
const LABEL_32454 = 'component_32454';
export function Component32454({ value = 32454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32454, 'data-value': derived.doubled }, children);
}
export default Component32454;
