import React from 'react';
const LABEL_7790 = 'component_7790';
export function Component7790({ value = 7790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7790, 'data-value': derived.doubled }, children);
}
export default Component7790;
