import React from 'react';
const LABEL_14617 = 'component_14617';
export function Component14617({ value = 14617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14617, 'data-value': derived.doubled }, children);
}
export default Component14617;
