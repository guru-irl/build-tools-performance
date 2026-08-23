import React from 'react';
const LABEL_43762 = 'component_43762';
export function Component43762({ value = 43762, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43762, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43762, 'data-value': derived.doubled }, children);
}
export default Component43762;
