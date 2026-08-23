import React from 'react';
const LABEL_26300 = 'component_26300';
export function Component26300({ value = 26300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26300, 'data-value': derived.doubled }, children);
}
export default Component26300;
