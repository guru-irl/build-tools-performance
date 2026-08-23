import React from 'react';
const LABEL_3491 = 'component_3491';
export function Component3491({ value = 3491, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3491, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3491, 'data-value': derived.doubled }, children);
}
export default Component3491;
