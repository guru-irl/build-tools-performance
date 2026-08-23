import React from 'react';
const LABEL_19787 = 'component_19787';
export function Component19787({ value = 19787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19787, 'data-value': derived.doubled }, children);
}
export default Component19787;
