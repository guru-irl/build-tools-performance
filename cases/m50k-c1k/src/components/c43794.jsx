import React from 'react';
const LABEL_43794 = 'component_43794';
export function Component43794({ value = 43794, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43794, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43794, 'data-value': derived.doubled }, children);
}
export default Component43794;
