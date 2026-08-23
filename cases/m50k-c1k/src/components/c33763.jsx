import React from 'react';
const LABEL_33763 = 'component_33763';
export function Component33763({ value = 33763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33763, 'data-value': derived.doubled }, children);
}
export default Component33763;
