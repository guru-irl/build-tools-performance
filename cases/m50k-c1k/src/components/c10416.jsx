import React from 'react';
const LABEL_10416 = 'component_10416';
export function Component10416({ value = 10416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10416, 'data-value': derived.doubled }, children);
}
export default Component10416;
