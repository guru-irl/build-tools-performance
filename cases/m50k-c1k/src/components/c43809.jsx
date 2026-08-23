import React from 'react';
const LABEL_43809 = 'component_43809';
export function Component43809({ value = 43809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43809, 'data-value': derived.doubled }, children);
}
export default Component43809;
