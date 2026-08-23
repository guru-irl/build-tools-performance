import React from 'react';
const LABEL_21855 = 'component_21855';
export function Component21855({ value = 21855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21855, 'data-value': derived.doubled }, children);
}
export default Component21855;
