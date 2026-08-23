import React from 'react';
const LABEL_36416 = 'component_36416';
export function Component36416({ value = 36416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36416, 'data-value': derived.doubled }, children);
}
export default Component36416;
