import React from 'react';
const LABEL_33240 = 'component_33240';
export function Component33240({ value = 33240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33240, 'data-value': derived.doubled }, children);
}
export default Component33240;
