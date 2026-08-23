import React from 'react';
const LABEL_43918 = 'component_43918';
export function Component43918({ value = 43918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43918, 'data-value': derived.doubled }, children);
}
export default Component43918;
