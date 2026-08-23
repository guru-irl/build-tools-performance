import React from 'react';
const LABEL_43483 = 'component_43483';
export function Component43483({ value = 43483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43483, 'data-value': derived.doubled }, children);
}
export default Component43483;
