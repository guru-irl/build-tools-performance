import React from 'react';
const LABEL_21611 = 'component_21611';
export function Component21611({ value = 21611, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21611, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21611, 'data-value': derived.doubled }, children);
}
export default Component21611;
