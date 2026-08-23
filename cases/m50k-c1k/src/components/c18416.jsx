import React from 'react';
const LABEL_18416 = 'component_18416';
export function Component18416({ value = 18416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18416, 'data-value': derived.doubled }, children);
}
export default Component18416;
