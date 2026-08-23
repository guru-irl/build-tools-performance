import React from 'react';
const LABEL_29767 = 'component_29767';
export function Component29767({ value = 29767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29767, 'data-value': derived.doubled }, children);
}
export default Component29767;
