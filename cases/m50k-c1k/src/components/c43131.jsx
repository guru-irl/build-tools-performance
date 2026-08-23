import React from 'react';
const LABEL_43131 = 'component_43131';
export function Component43131({ value = 43131, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43131, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43131, 'data-value': derived.doubled }, children);
}
export default Component43131;
