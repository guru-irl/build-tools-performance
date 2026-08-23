import React from 'react';
const LABEL_15951 = 'component_15951';
export function Component15951({ value = 15951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15951, 'data-value': derived.doubled }, children);
}
export default Component15951;
