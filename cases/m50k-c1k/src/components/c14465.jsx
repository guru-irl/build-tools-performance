import React from 'react';
const LABEL_14465 = 'component_14465';
export function Component14465({ value = 14465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14465, 'data-value': derived.doubled }, children);
}
export default Component14465;
