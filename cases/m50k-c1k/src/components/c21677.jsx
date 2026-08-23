import React from 'react';
const LABEL_21677 = 'component_21677';
export function Component21677({ value = 21677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21677, 'data-value': derived.doubled }, children);
}
export default Component21677;
