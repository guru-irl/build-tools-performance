import React from 'react';
const LABEL_31617 = 'component_31617';
export function Component31617({ value = 31617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31617, 'data-value': derived.doubled }, children);
}
export default Component31617;
