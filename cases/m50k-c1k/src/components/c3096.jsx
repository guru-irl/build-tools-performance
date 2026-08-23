import React from 'react';
const LABEL_3096 = 'component_3096';
export function Component3096({ value = 3096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3096, 'data-value': derived.doubled }, children);
}
export default Component3096;
