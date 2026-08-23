import React from 'react';
const LABEL_29377 = 'component_29377';
export function Component29377({ value = 29377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29377, 'data-value': derived.doubled }, children);
}
export default Component29377;
