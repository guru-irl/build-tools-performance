import React from 'react';
const LABEL_12916 = 'component_12916';
export function Component12916({ value = 12916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12916, 'data-value': derived.doubled }, children);
}
export default Component12916;
