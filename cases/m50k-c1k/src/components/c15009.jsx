import React from 'react';
const LABEL_15009 = 'component_15009';
export function Component15009({ value = 15009, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15009, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15009, 'data-value': derived.doubled }, children);
}
export default Component15009;
