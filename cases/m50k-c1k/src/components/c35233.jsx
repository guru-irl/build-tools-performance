import React from 'react';
const LABEL_35233 = 'component_35233';
export function Component35233({ value = 35233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35233, 'data-value': derived.doubled }, children);
}
export default Component35233;
