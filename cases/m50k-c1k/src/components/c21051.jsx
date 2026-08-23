import React from 'react';
const LABEL_21051 = 'component_21051';
export function Component21051({ value = 21051, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21051, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21051, 'data-value': derived.doubled }, children);
}
export default Component21051;
