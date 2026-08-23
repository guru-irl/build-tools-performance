import React from 'react';
const LABEL_38355 = 'component_38355';
export function Component38355({ value = 38355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38355, 'data-value': derived.doubled }, children);
}
export default Component38355;
