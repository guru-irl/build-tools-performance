import React from 'react';
const LABEL_4062 = 'component_4062';
export function Component4062({ value = 4062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4062, 'data-value': derived.doubled }, children);
}
export default Component4062;
