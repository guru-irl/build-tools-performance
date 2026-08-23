import React from 'react';
const LABEL_21184 = 'component_21184';
export function Component21184({ value = 21184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21184, 'data-value': derived.doubled }, children);
}
export default Component21184;
