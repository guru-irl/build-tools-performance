import React from 'react';
const LABEL_43761 = 'component_43761';
export function Component43761({ value = 43761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43761, 'data-value': derived.doubled }, children);
}
export default Component43761;
