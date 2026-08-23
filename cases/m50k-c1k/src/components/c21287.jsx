import React from 'react';
const LABEL_21287 = 'component_21287';
export function Component21287({ value = 21287, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21287, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21287, 'data-value': derived.doubled }, children);
}
export default Component21287;
