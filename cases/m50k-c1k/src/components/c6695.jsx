import React from 'react';
const LABEL_6695 = 'component_6695';
export function Component6695({ value = 6695, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6695, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6695, 'data-value': derived.doubled }, children);
}
export default Component6695;
