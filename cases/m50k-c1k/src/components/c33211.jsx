import React from 'react';
const LABEL_33211 = 'component_33211';
export function Component33211({ value = 33211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33211, 'data-value': derived.doubled }, children);
}
export default Component33211;
