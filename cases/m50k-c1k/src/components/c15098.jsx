import React from 'react';
const LABEL_15098 = 'component_15098';
export function Component15098({ value = 15098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15098, 'data-value': derived.doubled }, children);
}
export default Component15098;
