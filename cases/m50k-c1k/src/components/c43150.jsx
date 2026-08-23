import React from 'react';
const LABEL_43150 = 'component_43150';
export function Component43150({ value = 43150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43150, 'data-value': derived.doubled }, children);
}
export default Component43150;
