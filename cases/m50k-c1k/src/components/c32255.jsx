import React from 'react';
const LABEL_32255 = 'component_32255';
export function Component32255({ value = 32255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32255, 'data-value': derived.doubled }, children);
}
export default Component32255;
