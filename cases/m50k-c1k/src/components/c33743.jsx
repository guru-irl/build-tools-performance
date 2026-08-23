import React from 'react';
const LABEL_33743 = 'component_33743';
export function Component33743({ value = 33743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33743, 'data-value': derived.doubled }, children);
}
export default Component33743;
