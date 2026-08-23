import React from 'react';
const LABEL_14416 = 'component_14416';
export function Component14416({ value = 14416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14416, 'data-value': derived.doubled }, children);
}
export default Component14416;
