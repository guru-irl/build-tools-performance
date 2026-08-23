import React from 'react';
const LABEL_43318 = 'component_43318';
export function Component43318({ value = 43318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43318, 'data-value': derived.doubled }, children);
}
export default Component43318;
