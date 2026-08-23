import React from 'react';
const LABEL_2640 = 'component_2640';
export function Component2640({ value = 2640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2640, 'data-value': derived.doubled }, children);
}
export default Component2640;
