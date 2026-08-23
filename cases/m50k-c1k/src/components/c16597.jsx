import React from 'react';
const LABEL_16597 = 'component_16597';
export function Component16597({ value = 16597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16597, 'data-value': derived.doubled }, children);
}
export default Component16597;
