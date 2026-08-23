import React from 'react';
const LABEL_2864 = 'component_2864';
export function Component2864({ value = 2864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2864, 'data-value': derived.doubled }, children);
}
export default Component2864;
