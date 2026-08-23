import React from 'react';
const LABEL_33202 = 'component_33202';
export function Component33202({ value = 33202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33202, 'data-value': derived.doubled }, children);
}
export default Component33202;
