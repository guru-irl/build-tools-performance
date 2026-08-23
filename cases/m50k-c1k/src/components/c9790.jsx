import React from 'react';
const LABEL_9790 = 'component_9790';
export function Component9790({ value = 9790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9790, 'data-value': derived.doubled }, children);
}
export default Component9790;
