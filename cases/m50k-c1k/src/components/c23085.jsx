import React from 'react';
const LABEL_23085 = 'component_23085';
export function Component23085({ value = 23085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23085, 'data-value': derived.doubled }, children);
}
export default Component23085;
