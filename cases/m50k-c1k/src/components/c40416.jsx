import React from 'react';
const LABEL_40416 = 'component_40416';
export function Component40416({ value = 40416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40416, 'data-value': derived.doubled }, children);
}
export default Component40416;
