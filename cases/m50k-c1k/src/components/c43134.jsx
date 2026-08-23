import React from 'react';
const LABEL_43134 = 'component_43134';
export function Component43134({ value = 43134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43134, 'data-value': derived.doubled }, children);
}
export default Component43134;
