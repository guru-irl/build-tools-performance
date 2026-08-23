import React from 'react';
const LABEL_25891 = 'component_25891';
export function Component25891({ value = 25891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25891, 'data-value': derived.doubled }, children);
}
export default Component25891;
