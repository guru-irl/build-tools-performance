import React from 'react';
const LABEL_33109 = 'component_33109';
export function Component33109({ value = 33109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33109, 'data-value': derived.doubled }, children);
}
export default Component33109;
