import React from 'react';
const LABEL_42825 = 'component_42825';
export function Component42825({ value = 42825, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42825, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42825, 'data-value': derived.doubled }, children);
}
export default Component42825;
