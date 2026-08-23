import React from 'react';
const LABEL_12416 = 'component_12416';
export function Component12416({ value = 12416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12416, 'data-value': derived.doubled }, children);
}
export default Component12416;
