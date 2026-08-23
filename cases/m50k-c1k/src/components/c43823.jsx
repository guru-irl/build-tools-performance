import React from 'react';
const LABEL_43823 = 'component_43823';
export function Component43823({ value = 43823, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43823, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43823, 'data-value': derived.doubled }, children);
}
export default Component43823;
