import React from 'react';
const LABEL_31416 = 'component_31416';
export function Component31416({ value = 31416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31416, 'data-value': derived.doubled }, children);
}
export default Component31416;
