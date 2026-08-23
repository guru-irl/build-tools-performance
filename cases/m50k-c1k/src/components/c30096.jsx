import React from 'react';
const LABEL_30096 = 'component_30096';
export function Component30096({ value = 30096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30096, 'data-value': derived.doubled }, children);
}
export default Component30096;
