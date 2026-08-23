import React from 'react';
const LABEL_22627 = 'component_22627';
export function Component22627({ value = 22627, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22627, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22627, 'data-value': derived.doubled }, children);
}
export default Component22627;
