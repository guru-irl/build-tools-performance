import React from 'react';
const LABEL_33096 = 'component_33096';
export function Component33096({ value = 33096, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33096, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33096, 'data-value': derived.doubled }, children);
}
export default Component33096;
