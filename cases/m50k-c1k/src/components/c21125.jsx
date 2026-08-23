import React from 'react';
const LABEL_21125 = 'component_21125';
export function Component21125({ value = 21125, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21125, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21125, 'data-value': derived.doubled }, children);
}
export default Component21125;
