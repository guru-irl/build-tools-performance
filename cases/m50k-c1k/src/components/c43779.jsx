import React from 'react';
const LABEL_43779 = 'component_43779';
export function Component43779({ value = 43779, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43779, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43779, 'data-value': derived.doubled }, children);
}
export default Component43779;
