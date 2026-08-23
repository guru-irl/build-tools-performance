import React from 'react';
const LABEL_30638 = 'component_30638';
export function Component30638({ value = 30638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30638, 'data-value': derived.doubled }, children);
}
export default Component30638;
