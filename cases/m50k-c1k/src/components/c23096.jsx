import React from 'react';
const LABEL_23096 = 'component_23096';
export function Component23096({ value = 23096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23096, 'data-value': derived.doubled }, children);
}
export default Component23096;
