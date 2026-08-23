import React from 'react';
const LABEL_23007 = 'component_23007';
export function Component23007({ value = 23007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23007, 'data-value': derived.doubled }, children);
}
export default Component23007;
