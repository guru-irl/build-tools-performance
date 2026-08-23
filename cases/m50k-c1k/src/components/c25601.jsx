import React from 'react';
const LABEL_25601 = 'component_25601';
export function Component25601({ value = 25601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25601, 'data-value': derived.doubled }, children);
}
export default Component25601;
