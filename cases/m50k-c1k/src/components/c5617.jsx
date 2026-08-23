import React from 'react';
const LABEL_5617 = 'component_5617';
export function Component5617({ value = 5617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5617, 'data-value': derived.doubled }, children);
}
export default Component5617;
