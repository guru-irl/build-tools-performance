import React from 'react';
const LABEL_29761 = 'component_29761';
export function Component29761({ value = 29761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29761, 'data-value': derived.doubled }, children);
}
export default Component29761;
