import React from 'react';
const LABEL_45416 = 'component_45416';
export function Component45416({ value = 45416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45416, 'data-value': derived.doubled }, children);
}
export default Component45416;
