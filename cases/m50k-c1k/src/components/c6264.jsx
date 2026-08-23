import React from 'react';
const LABEL_6264 = 'component_6264';
export function Component6264({ value = 6264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6264, 'data-value': derived.doubled }, children);
}
export default Component6264;
