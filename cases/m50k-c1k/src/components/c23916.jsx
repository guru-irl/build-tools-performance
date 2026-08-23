import React from 'react';
const LABEL_23916 = 'component_23916';
export function Component23916({ value = 23916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23916, 'data-value': derived.doubled }, children);
}
export default Component23916;
