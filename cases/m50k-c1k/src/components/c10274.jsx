import React from 'react';
const LABEL_10274 = 'component_10274';
export function Component10274({ value = 10274, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10274, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10274, 'data-value': derived.doubled }, children);
}
export default Component10274;
