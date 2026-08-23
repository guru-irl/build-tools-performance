import React from 'react';
const LABEL_33940 = 'component_33940';
export function Component33940({ value = 33940, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33940, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33940, 'data-value': derived.doubled }, children);
}
export default Component33940;
