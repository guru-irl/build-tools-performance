import React from 'react';
const LABEL_9267 = 'component_9267';
export function Component9267({ value = 9267, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9267, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9267, 'data-value': derived.doubled }, children);
}
export default Component9267;
