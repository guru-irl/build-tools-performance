import React from 'react';
const LABEL_16243 = 'component_16243';
export function Component16243({ value = 16243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16243, 'data-value': derived.doubled }, children);
}
export default Component16243;
