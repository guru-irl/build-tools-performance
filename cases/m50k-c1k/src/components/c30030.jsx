import React from 'react';
const LABEL_30030 = 'component_30030';
export function Component30030({ value = 30030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30030, 'data-value': derived.doubled }, children);
}
export default Component30030;
