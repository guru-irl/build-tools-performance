import React from 'react';
const LABEL_35487 = 'component_35487';
export function Component35487({ value = 35487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35487, 'data-value': derived.doubled }, children);
}
export default Component35487;
