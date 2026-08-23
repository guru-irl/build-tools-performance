import React from 'react';
const LABEL_38264 = 'component_38264';
export function Component38264({ value = 38264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38264, 'data-value': derived.doubled }, children);
}
export default Component38264;
