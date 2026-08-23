import React from 'react';
const LABEL_42914 = 'component_42914';
export function Component42914({ value = 42914, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42914, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42914, 'data-value': derived.doubled }, children);
}
export default Component42914;
