import React from 'react';
const LABEL_36724 = 'component_36724';
export function Component36724({ value = 36724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36724, 'data-value': derived.doubled }, children);
}
export default Component36724;
