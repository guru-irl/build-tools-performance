import React from 'react';
const LABEL_15646 = 'component_15646';
export function Component15646({ value = 15646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15646, 'data-value': derived.doubled }, children);
}
export default Component15646;
