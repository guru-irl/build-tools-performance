import React from 'react';
const LABEL_2441 = 'component_2441';
export function Component2441({ value = 2441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2441, 'data-value': derived.doubled }, children);
}
export default Component2441;
