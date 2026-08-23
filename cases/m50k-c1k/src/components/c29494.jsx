import React from 'react';
const LABEL_29494 = 'component_29494';
export function Component29494({ value = 29494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29494, 'data-value': derived.doubled }, children);
}
export default Component29494;
