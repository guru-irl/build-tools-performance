import React from 'react';
const LABEL_43991 = 'component_43991';
export function Component43991({ value = 43991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43991, 'data-value': derived.doubled }, children);
}
export default Component43991;
