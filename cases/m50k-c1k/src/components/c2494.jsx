import React from 'react';
const LABEL_2494 = 'component_2494';
export function Component2494({ value = 2494, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2494, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2494, 'data-value': derived.doubled }, children);
}
export default Component2494;
