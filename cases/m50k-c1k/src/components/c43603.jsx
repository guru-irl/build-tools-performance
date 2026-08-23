import React from 'react';
const LABEL_43603 = 'component_43603';
export function Component43603({ value = 43603, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43603, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43603, 'data-value': derived.doubled }, children);
}
export default Component43603;
