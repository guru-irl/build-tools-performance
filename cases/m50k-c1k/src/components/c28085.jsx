import React from 'react';
const LABEL_28085 = 'component_28085';
export function Component28085({ value = 28085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28085, 'data-value': derived.doubled }, children);
}
export default Component28085;
