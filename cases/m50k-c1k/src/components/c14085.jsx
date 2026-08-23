import React from 'react';
const LABEL_14085 = 'component_14085';
export function Component14085({ value = 14085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14085, 'data-value': derived.doubled }, children);
}
export default Component14085;
