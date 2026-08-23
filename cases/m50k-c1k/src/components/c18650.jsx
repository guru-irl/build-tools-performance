import React from 'react';
const LABEL_18650 = 'component_18650';
export function Component18650({ value = 18650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18650, 'data-value': derived.doubled }, children);
}
export default Component18650;
