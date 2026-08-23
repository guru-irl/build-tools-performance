import React from 'react';
const LABEL_43539 = 'component_43539';
export function Component43539({ value = 43539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43539, 'data-value': derived.doubled }, children);
}
export default Component43539;
