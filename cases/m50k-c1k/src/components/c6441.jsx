import React from 'react';
const LABEL_6441 = 'component_6441';
export function Component6441({ value = 6441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6441, 'data-value': derived.doubled }, children);
}
export default Component6441;
