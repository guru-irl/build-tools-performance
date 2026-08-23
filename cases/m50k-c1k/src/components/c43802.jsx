import React from 'react';
const LABEL_43802 = 'component_43802';
export function Component43802({ value = 43802, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43802, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43802, 'data-value': derived.doubled }, children);
}
export default Component43802;
