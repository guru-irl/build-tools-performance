import React from 'react';
const LABEL_43065 = 'component_43065';
export function Component43065({ value = 43065, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43065, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43065, 'data-value': derived.doubled }, children);
}
export default Component43065;
