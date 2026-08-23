import React from 'react';
const LABEL_42377 = 'component_42377';
export function Component42377({ value = 42377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42377, 'data-value': derived.doubled }, children);
}
export default Component42377;
