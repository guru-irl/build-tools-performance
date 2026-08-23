import React from 'react';
const LABEL_43356 = 'component_43356';
export function Component43356({ value = 43356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43356, 'data-value': derived.doubled }, children);
}
export default Component43356;
