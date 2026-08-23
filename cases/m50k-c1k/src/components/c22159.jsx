import React from 'react';
const LABEL_22159 = 'component_22159';
export function Component22159({ value = 22159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22159, 'data-value': derived.doubled }, children);
}
export default Component22159;
