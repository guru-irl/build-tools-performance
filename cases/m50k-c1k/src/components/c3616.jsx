import React from 'react';
const LABEL_3616 = 'component_3616';
export function Component3616({ value = 3616, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3616, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3616, 'data-value': derived.doubled }, children);
}
export default Component3616;
