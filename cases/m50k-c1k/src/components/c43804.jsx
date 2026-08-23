import React from 'react';
const LABEL_43804 = 'component_43804';
export function Component43804({ value = 43804, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43804, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43804, 'data-value': derived.doubled }, children);
}
export default Component43804;
