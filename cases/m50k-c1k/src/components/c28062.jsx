import React from 'react';
const LABEL_28062 = 'component_28062';
export function Component28062({ value = 28062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28062, 'data-value': derived.doubled }, children);
}
export default Component28062;
