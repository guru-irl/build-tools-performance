import React from 'react';
const LABEL_21688 = 'component_21688';
export function Component21688({ value = 21688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21688, 'data-value': derived.doubled }, children);
}
export default Component21688;
