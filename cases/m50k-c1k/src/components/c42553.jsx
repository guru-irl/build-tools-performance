import React from 'react';
const LABEL_42553 = 'component_42553';
export function Component42553({ value = 42553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42553, 'data-value': derived.doubled }, children);
}
export default Component42553;
