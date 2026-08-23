import React from 'react';
const LABEL_43469 = 'component_43469';
export function Component43469({ value = 43469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43469, 'data-value': derived.doubled }, children);
}
export default Component43469;
