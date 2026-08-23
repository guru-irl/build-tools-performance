import React from 'react';
const LABEL_16416 = 'component_16416';
export function Component16416({ value = 16416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16416, 'data-value': derived.doubled }, children);
}
export default Component16416;
