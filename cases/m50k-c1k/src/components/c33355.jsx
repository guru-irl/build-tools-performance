import React from 'react';
const LABEL_33355 = 'component_33355';
export function Component33355({ value = 33355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33355, 'data-value': derived.doubled }, children);
}
export default Component33355;
