import React from 'react';
const LABEL_35355 = 'component_35355';
export function Component35355({ value = 35355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35355, 'data-value': derived.doubled }, children);
}
export default Component35355;
