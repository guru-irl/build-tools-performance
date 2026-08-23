import React from 'react';
const LABEL_4213 = 'component_4213';
export function Component4213({ value = 4213, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4213, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4213, 'data-value': derived.doubled }, children);
}
export default Component4213;
