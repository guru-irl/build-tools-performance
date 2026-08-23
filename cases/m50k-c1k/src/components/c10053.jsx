import React from 'react';
const LABEL_10053 = 'component_10053';
export function Component10053({ value = 10053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10053, 'data-value': derived.doubled }, children);
}
export default Component10053;
