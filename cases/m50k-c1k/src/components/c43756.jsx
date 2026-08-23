import React from 'react';
const LABEL_43756 = 'component_43756';
export function Component43756({ value = 43756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43756, 'data-value': derived.doubled }, children);
}
export default Component43756;
