import React from 'react';
const LABEL_16550 = 'component_16550';
export function Component16550({ value = 16550, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16550, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16550, 'data-value': derived.doubled }, children);
}
export default Component16550;
