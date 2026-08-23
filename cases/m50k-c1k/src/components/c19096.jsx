import React from 'react';
const LABEL_19096 = 'component_19096';
export function Component19096({ value = 19096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19096, 'data-value': derived.doubled }, children);
}
export default Component19096;
