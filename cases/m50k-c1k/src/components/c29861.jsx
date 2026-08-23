import React from 'react';
const LABEL_29861 = 'component_29861';
export function Component29861({ value = 29861, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29861, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29861, 'data-value': derived.doubled }, children);
}
export default Component29861;
