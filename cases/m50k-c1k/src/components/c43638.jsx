import React from 'react';
const LABEL_43638 = 'component_43638';
export function Component43638({ value = 43638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43638, 'data-value': derived.doubled }, children);
}
export default Component43638;
