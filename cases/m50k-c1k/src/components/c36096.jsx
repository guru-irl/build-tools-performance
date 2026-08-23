import React from 'react';
const LABEL_36096 = 'component_36096';
export function Component36096({ value = 36096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36096, 'data-value': derived.doubled }, children);
}
export default Component36096;
