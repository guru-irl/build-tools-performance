import React from 'react';
const LABEL_33554 = 'component_33554';
export function Component33554({ value = 33554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33554, 'data-value': derived.doubled }, children);
}
export default Component33554;
