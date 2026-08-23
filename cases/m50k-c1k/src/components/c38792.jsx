import React from 'react';
const LABEL_38792 = 'component_38792';
export function Component38792({ value = 38792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38792, 'data-value': derived.doubled }, children);
}
export default Component38792;
