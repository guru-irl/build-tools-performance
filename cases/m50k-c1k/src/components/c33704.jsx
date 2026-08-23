import React from 'react';
const LABEL_33704 = 'component_33704';
export function Component33704({ value = 33704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33704, 'data-value': derived.doubled }, children);
}
export default Component33704;
