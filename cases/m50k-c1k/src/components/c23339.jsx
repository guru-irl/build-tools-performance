import React from 'react';
const LABEL_23339 = 'component_23339';
export function Component23339({ value = 23339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23339, 'data-value': derived.doubled }, children);
}
export default Component23339;
