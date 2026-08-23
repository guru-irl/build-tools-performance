import React from 'react';
const LABEL_44509 = 'component_44509';
export function Component44509({ value = 44509, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44509, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44509, 'data-value': derived.doubled }, children);
}
export default Component44509;
