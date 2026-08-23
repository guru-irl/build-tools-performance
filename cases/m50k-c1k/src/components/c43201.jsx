import React from 'react';
const LABEL_43201 = 'component_43201';
export function Component43201({ value = 43201, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43201, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43201, 'data-value': derived.doubled }, children);
}
export default Component43201;
