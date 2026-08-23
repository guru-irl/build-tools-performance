import React from 'react';
const LABEL_2918 = 'component_2918';
export function Component2918({ value = 2918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2918, 'data-value': derived.doubled }, children);
}
export default Component2918;
