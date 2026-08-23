import React from 'react';
const LABEL_15284 = 'component_15284';
export function Component15284({ value = 15284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15284, 'data-value': derived.doubled }, children);
}
export default Component15284;
