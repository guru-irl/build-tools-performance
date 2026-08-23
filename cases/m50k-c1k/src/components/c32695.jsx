import React from 'react';
const LABEL_32695 = 'component_32695';
export function Component32695({ value = 32695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32695, 'data-value': derived.doubled }, children);
}
export default Component32695;
