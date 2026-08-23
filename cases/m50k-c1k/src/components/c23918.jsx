import React from 'react';
const LABEL_23918 = 'component_23918';
export function Component23918({ value = 23918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23918, 'data-value': derived.doubled }, children);
}
export default Component23918;
