import React from 'react';
const LABEL_2150 = 'component_2150';
export function Component2150({ value = 2150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2150, 'data-value': derived.doubled }, children);
}
export default Component2150;
