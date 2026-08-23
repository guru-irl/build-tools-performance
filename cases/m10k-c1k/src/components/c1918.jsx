import React from 'react';
const LABEL_1918 = 'component_1918';
export function Component1918({ value = 1918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1918, 'data-value': derived.doubled }, children);
}
export default Component1918;
