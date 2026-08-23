import React from 'react';
const LABEL_42916 = 'component_42916';
export function Component42916({ value = 42916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42916, 'data-value': derived.doubled }, children);
}
export default Component42916;
