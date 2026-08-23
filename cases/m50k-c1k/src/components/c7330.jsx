import React from 'react';
const LABEL_7330 = 'component_7330';
export function Component7330({ value = 7330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7330, 'data-value': derived.doubled }, children);
}
export default Component7330;
