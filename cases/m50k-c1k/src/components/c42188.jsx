import React from 'react';
const LABEL_42188 = 'component_42188';
export function Component42188({ value = 42188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42188, 'data-value': derived.doubled }, children);
}
export default Component42188;
