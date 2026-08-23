import React from 'react';
const LABEL_33303 = 'component_33303';
export function Component33303({ value = 33303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33303, 'data-value': derived.doubled }, children);
}
export default Component33303;
