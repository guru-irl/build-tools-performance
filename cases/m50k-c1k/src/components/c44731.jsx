import React from 'react';
const LABEL_44731 = 'component_44731';
export function Component44731({ value = 44731, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44731, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44731, 'data-value': derived.doubled }, children);
}
export default Component44731;
