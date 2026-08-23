import React from 'react';
const LABEL_43558 = 'component_43558';
export function Component43558({ value = 43558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43558, 'data-value': derived.doubled }, children);
}
export default Component43558;
