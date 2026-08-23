import React from 'react';
const LABEL_22085 = 'component_22085';
export function Component22085({ value = 22085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22085, 'data-value': derived.doubled }, children);
}
export default Component22085;
