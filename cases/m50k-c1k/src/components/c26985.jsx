import React from 'react';
const LABEL_26985 = 'component_26985';
export function Component26985({ value = 26985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26985, 'data-value': derived.doubled }, children);
}
export default Component26985;
