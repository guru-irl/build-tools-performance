import React from 'react';
const LABEL_32611 = 'component_32611';
export function Component32611({ value = 32611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32611, 'data-value': derived.doubled }, children);
}
export default Component32611;
