import React from 'react';
const LABEL_33505 = 'component_33505';
export function Component33505({ value = 33505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33505, 'data-value': derived.doubled }, children);
}
export default Component33505;
