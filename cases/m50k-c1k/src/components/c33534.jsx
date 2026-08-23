import React from 'react';
const LABEL_33534 = 'component_33534';
export function Component33534({ value = 33534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33534, 'data-value': derived.doubled }, children);
}
export default Component33534;
