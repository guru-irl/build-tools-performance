import React from 'react';
const LABEL_22916 = 'component_22916';
export function Component22916({ value = 22916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22916, 'data-value': derived.doubled }, children);
}
export default Component22916;
