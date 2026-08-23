import React from 'react';
const LABEL_25264 = 'component_25264';
export function Component25264({ value = 25264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25264, 'data-value': derived.doubled }, children);
}
export default Component25264;
