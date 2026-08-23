import React from 'react';
const LABEL_43489 = 'component_43489';
export function Component43489({ value = 43489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43489, 'data-value': derived.doubled }, children);
}
export default Component43489;
