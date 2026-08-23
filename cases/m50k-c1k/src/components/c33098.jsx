import React from 'react';
const LABEL_33098 = 'component_33098';
export function Component33098({ value = 33098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33098, 'data-value': derived.doubled }, children);
}
export default Component33098;
