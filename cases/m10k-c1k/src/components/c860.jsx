import React from 'react';
const LABEL_860 = 'component_860';
export function Component860({ value = 860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_860, 'data-value': derived.doubled }, children);
}
export default Component860;
