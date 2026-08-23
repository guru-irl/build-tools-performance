import React from 'react';
const LABEL_23441 = 'component_23441';
export function Component23441({ value = 23441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23441, 'data-value': derived.doubled }, children);
}
export default Component23441;
