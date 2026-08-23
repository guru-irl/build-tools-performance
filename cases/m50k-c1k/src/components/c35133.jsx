import React from 'react';
const LABEL_35133 = 'component_35133';
export function Component35133({ value = 35133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35133, 'data-value': derived.doubled }, children);
}
export default Component35133;
