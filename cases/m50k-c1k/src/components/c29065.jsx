import React from 'react';
const LABEL_29065 = 'component_29065';
export function Component29065({ value = 29065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29065, 'data-value': derived.doubled }, children);
}
export default Component29065;
