import React from 'react';
const LABEL_22803 = 'component_22803';
export function Component22803({ value = 22803, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22803, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22803, 'data-value': derived.doubled }, children);
}
export default Component22803;
