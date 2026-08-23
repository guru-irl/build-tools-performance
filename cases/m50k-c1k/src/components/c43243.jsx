import React from 'react';
const LABEL_43243 = 'component_43243';
export function Component43243({ value = 43243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43243, 'data-value': derived.doubled }, children);
}
export default Component43243;
