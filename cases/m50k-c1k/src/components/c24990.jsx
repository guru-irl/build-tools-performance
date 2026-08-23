import React from 'react';
const LABEL_24990 = 'component_24990';
export function Component24990({ value = 24990, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24990, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24990, 'data-value': derived.doubled }, children);
}
export default Component24990;
