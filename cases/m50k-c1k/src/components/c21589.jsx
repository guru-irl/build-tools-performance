import React from 'react';
const LABEL_21589 = 'component_21589';
export function Component21589({ value = 21589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21589, 'data-value': derived.doubled }, children);
}
export default Component21589;
