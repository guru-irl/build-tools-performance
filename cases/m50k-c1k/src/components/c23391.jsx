import React from 'react';
const LABEL_23391 = 'component_23391';
export function Component23391({ value = 23391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23391, 'data-value': derived.doubled }, children);
}
export default Component23391;
