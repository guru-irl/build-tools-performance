import React from 'react';
const LABEL_42207 = 'component_42207';
export function Component42207({ value = 42207, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42207, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42207, 'data-value': derived.doubled }, children);
}
export default Component42207;
