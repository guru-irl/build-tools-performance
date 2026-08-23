import React from 'react';
const LABEL_43089 = 'component_43089';
export function Component43089({ value = 43089, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43089, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43089, 'data-value': derived.doubled }, children);
}
export default Component43089;
