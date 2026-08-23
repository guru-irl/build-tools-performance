import React from 'react';
const LABEL_39267 = 'component_39267';
export function Component39267({ value = 39267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39267, 'data-value': derived.doubled }, children);
}
export default Component39267;
