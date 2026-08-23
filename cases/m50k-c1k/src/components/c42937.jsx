import React from 'react';
const LABEL_42937 = 'component_42937';
export function Component42937({ value = 42937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42937, 'data-value': derived.doubled }, children);
}
export default Component42937;
