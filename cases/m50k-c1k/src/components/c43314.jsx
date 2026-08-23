import React from 'react';
const LABEL_43314 = 'component_43314';
export function Component43314({ value = 43314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43314, 'data-value': derived.doubled }, children);
}
export default Component43314;
