import React from 'react';
const LABEL_1916 = 'component_1916';
export function Component1916({ value = 1916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1916, 'data-value': derived.doubled }, children);
}
export default Component1916;
