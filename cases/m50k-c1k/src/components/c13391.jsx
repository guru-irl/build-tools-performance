import React from 'react';
const LABEL_13391 = 'component_13391';
export function Component13391({ value = 13391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13391, 'data-value': derived.doubled }, children);
}
export default Component13391;
