import React from 'react';
const LABEL_3650 = 'component_3650';
export function Component3650({ value = 3650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3650, 'data-value': derived.doubled }, children);
}
export default Component3650;
