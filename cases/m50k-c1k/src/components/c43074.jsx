import React from 'react';
const LABEL_43074 = 'component_43074';
export function Component43074({ value = 43074, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43074, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43074, 'data-value': derived.doubled }, children);
}
export default Component43074;
