import React from 'react';
const LABEL_15339 = 'component_15339';
export function Component15339({ value = 15339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15339, 'data-value': derived.doubled }, children);
}
export default Component15339;
