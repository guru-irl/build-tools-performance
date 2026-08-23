import React from 'react';
const LABEL_8731 = 'component_8731';
export function Component8731({ value = 8731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8731, 'data-value': derived.doubled }, children);
}
export default Component8731;
