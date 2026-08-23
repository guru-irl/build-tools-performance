import React from 'react';
const LABEL_43145 = 'component_43145';
export function Component43145({ value = 43145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43145, 'data-value': derived.doubled }, children);
}
export default Component43145;
