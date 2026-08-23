import React from 'react';
const LABEL_11916 = 'component_11916';
export function Component11916({ value = 11916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11916, 'data-value': derived.doubled }, children);
}
export default Component11916;
