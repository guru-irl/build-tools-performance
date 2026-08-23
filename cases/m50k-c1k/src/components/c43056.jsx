import React from 'react';
const LABEL_43056 = 'component_43056';
export function Component43056({ value = 43056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43056, 'data-value': derived.doubled }, children);
}
export default Component43056;
