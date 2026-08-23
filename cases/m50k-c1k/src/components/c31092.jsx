import React from 'react';
const LABEL_31092 = 'component_31092';
export function Component31092({ value = 31092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31092, 'data-value': derived.doubled }, children);
}
export default Component31092;
