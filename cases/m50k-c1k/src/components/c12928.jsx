import React from 'react';
const LABEL_12928 = 'component_12928';
export function Component12928({ value = 12928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12928, 'data-value': derived.doubled }, children);
}
export default Component12928;
