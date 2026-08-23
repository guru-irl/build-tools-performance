import React from 'react';
const LABEL_32625 = 'component_32625';
export function Component32625({ value = 32625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32625, 'data-value': derived.doubled }, children);
}
export default Component32625;
