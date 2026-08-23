import React from 'react';
const LABEL_43599 = 'component_43599';
export function Component43599({ value = 43599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43599, 'data-value': derived.doubled }, children);
}
export default Component43599;
