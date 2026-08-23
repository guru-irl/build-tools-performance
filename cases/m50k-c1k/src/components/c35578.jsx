import React from 'react';
const LABEL_35578 = 'component_35578';
export function Component35578({ value = 35578, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35578, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35578, 'data-value': derived.doubled }, children);
}
export default Component35578;
