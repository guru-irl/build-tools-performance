import React from 'react';
const LABEL_35096 = 'component_35096';
export function Component35096({ value = 35096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35096, 'data-value': derived.doubled }, children);
}
export default Component35096;
