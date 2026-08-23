import React from 'react';
const LABEL_3638 = 'component_3638';
export function Component3638({ value = 3638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3638, 'data-value': derived.doubled }, children);
}
export default Component3638;
