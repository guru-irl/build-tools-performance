import React from 'react';
const LABEL_8416 = 'component_8416';
export function Component8416({ value = 8416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8416, 'data-value': derived.doubled }, children);
}
export default Component8416;
