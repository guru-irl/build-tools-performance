import React from 'react';
const LABEL_37731 = 'component_37731';
export function Component37731({ value = 37731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37731, 'data-value': derived.doubled }, children);
}
export default Component37731;
