import React from 'react';
const LABEL_28857 = 'component_28857';
export function Component28857({ value = 28857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28857, 'data-value': derived.doubled }, children);
}
export default Component28857;
