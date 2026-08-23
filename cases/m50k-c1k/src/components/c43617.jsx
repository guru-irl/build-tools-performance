import React from 'react';
const LABEL_43617 = 'component_43617';
export function Component43617({ value = 43617, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43617, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43617, 'data-value': derived.doubled }, children);
}
export default Component43617;
