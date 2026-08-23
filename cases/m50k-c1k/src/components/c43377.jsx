import React from 'react';
const LABEL_43377 = 'component_43377';
export function Component43377({ value = 43377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43377, 'data-value': derived.doubled }, children);
}
export default Component43377;
