import React from 'react';
const LABEL_33999 = 'component_33999';
export function Component33999({ value = 33999, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33999, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33999, 'data-value': derived.doubled }, children);
}
export default Component33999;
