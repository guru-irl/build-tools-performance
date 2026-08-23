import React from 'react';
const LABEL_33650 = 'component_33650';
export function Component33650({ value = 33650, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33650, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33650, 'data-value': derived.doubled }, children);
}
export default Component33650;
