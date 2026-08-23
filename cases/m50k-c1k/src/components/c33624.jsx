import React from 'react';
const LABEL_33624 = 'component_33624';
export function Component33624({ value = 33624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33624, 'data-value': derived.doubled }, children);
}
export default Component33624;
