import React from 'react';
const LABEL_32891 = 'component_32891';
export function Component32891({ value = 32891, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32891, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32891, 'data-value': derived.doubled }, children);
}
export default Component32891;
