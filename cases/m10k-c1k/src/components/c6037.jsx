import React from 'react';
const LABEL_6037 = 'component_6037';
export function Component6037({ value = 6037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6037, 'data-value': derived.doubled }, children);
}
export default Component6037;
