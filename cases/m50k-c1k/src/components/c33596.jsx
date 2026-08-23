import React from 'react';
const LABEL_33596 = 'component_33596';
export function Component33596({ value = 33596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33596, 'data-value': derived.doubled }, children);
}
export default Component33596;
