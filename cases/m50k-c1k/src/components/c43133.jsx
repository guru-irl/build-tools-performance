import React from 'react';
const LABEL_43133 = 'component_43133';
export function Component43133({ value = 43133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43133, 'data-value': derived.doubled }, children);
}
export default Component43133;
