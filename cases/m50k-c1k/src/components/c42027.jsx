import React from 'react';
const LABEL_42027 = 'component_42027';
export function Component42027({ value = 42027, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42027, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42027, 'data-value': derived.doubled }, children);
}
export default Component42027;
