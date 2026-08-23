import React from 'react';
const LABEL_4916 = 'component_4916';
export function Component4916({ value = 4916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4916, 'data-value': derived.doubled }, children);
}
export default Component4916;
