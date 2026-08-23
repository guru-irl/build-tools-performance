import React from 'react';
const LABEL_26264 = 'component_26264';
export function Component26264({ value = 26264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26264, 'data-value': derived.doubled }, children);
}
export default Component26264;
