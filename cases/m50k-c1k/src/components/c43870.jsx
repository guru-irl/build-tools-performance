import React from 'react';
const LABEL_43870 = 'component_43870';
export function Component43870({ value = 43870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43870, 'data-value': derived.doubled }, children);
}
export default Component43870;
