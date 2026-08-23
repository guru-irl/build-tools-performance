import React from 'react';
const LABEL_46264 = 'component_46264';
export function Component46264({ value = 46264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46264, 'data-value': derived.doubled }, children);
}
export default Component46264;
