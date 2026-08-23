import React from 'react';
const LABEL_43931 = 'component_43931';
export function Component43931({ value = 43931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43931, 'data-value': derived.doubled }, children);
}
export default Component43931;
