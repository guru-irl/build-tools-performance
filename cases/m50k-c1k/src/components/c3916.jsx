import React from 'react';
const LABEL_3916 = 'component_3916';
export function Component3916({ value = 3916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3916, 'data-value': derived.doubled }, children);
}
export default Component3916;
