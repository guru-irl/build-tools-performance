import React from 'react';
const LABEL_44092 = 'component_44092';
export function Component44092({ value = 44092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44092, 'data-value': derived.doubled }, children);
}
export default Component44092;
