import React from 'react';
const LABEL_21431 = 'component_21431';
export function Component21431({ value = 21431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21431, 'data-value': derived.doubled }, children);
}
export default Component21431;
