import React from 'react';
const LABEL_42199 = 'component_42199';
export function Component42199({ value = 42199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42199, 'data-value': derived.doubled }, children);
}
export default Component42199;
