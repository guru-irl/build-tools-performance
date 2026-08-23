import React from 'react';
const LABEL_9029 = 'component_9029';
export function Component9029({ value = 9029, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9029, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9029, 'data-value': derived.doubled }, children);
}
export default Component9029;
