import React from 'react';
const LABEL_36916 = 'component_36916';
export function Component36916({ value = 36916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36916, 'data-value': derived.doubled }, children);
}
export default Component36916;
