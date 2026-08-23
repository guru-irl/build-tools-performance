import React from 'react';
const LABEL_13617 = 'component_13617';
export function Component13617({ value = 13617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13617, 'data-value': derived.doubled }, children);
}
export default Component13617;
