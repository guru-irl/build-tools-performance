import React from 'react';
const LABEL_22471 = 'component_22471';
export function Component22471({ value = 22471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22471, 'data-value': derived.doubled }, children);
}
export default Component22471;
