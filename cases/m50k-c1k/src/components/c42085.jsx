import React from 'react';
const LABEL_42085 = 'component_42085';
export function Component42085({ value = 42085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42085, 'data-value': derived.doubled }, children);
}
export default Component42085;
