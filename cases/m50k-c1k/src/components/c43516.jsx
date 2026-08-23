import React from 'react';
const LABEL_43516 = 'component_43516';
export function Component43516({ value = 43516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43516, 'data-value': derived.doubled }, children);
}
export default Component43516;
