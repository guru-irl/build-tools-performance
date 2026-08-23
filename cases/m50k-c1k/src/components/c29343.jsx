import React from 'react';
const LABEL_29343 = 'component_29343';
export function Component29343({ value = 29343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29343, 'data-value': derived.doubled }, children);
}
export default Component29343;
