import React from 'react';
const LABEL_790 = 'component_790';
export function Component790({ value = 790, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_790, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_790, 'data-value': derived.doubled }, children);
}
export default Component790;
