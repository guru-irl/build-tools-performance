import React from 'react';
const LABEL_16599 = 'component_16599';
export function Component16599({ value = 16599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16599, 'data-value': derived.doubled }, children);
}
export default Component16599;
