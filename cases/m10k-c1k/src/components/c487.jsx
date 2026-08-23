import React from 'react';
const LABEL_487 = 'component_487';
export function Component487({ value = 487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_487, 'data-value': derived.doubled }, children);
}
export default Component487;
