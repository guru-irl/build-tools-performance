import React from 'react';
const LABEL_33164 = 'component_33164';
export function Component33164({ value = 33164, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33164, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33164, 'data-value': derived.doubled }, children);
}
export default Component33164;
