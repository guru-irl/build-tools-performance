import React from 'react';
const LABEL_43129 = 'component_43129';
export function Component43129({ value = 43129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43129, 'data-value': derived.doubled }, children);
}
export default Component43129;
