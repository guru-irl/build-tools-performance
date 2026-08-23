import React from 'react';
const LABEL_43437 = 'component_43437';
export function Component43437({ value = 43437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43437, 'data-value': derived.doubled }, children);
}
export default Component43437;
