import React from 'react';
const LABEL_25761 = 'component_25761';
export function Component25761({ value = 25761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25761, 'data-value': derived.doubled }, children);
}
export default Component25761;
