import React from 'react';
const LABEL_38445 = 'component_38445';
export function Component38445({ value = 38445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38445, 'data-value': derived.doubled }, children);
}
export default Component38445;
