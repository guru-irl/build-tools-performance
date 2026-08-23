import React from 'react';
const LABEL_43630 = 'component_43630';
export function Component43630({ value = 43630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43630, 'data-value': derived.doubled }, children);
}
export default Component43630;
