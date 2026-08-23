import React from 'react';
const LABEL_29677 = 'component_29677';
export function Component29677({ value = 29677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29677, 'data-value': derived.doubled }, children);
}
export default Component29677;
