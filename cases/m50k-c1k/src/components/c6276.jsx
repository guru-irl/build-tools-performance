import React from 'react';
const LABEL_6276 = 'component_6276';
export function Component6276({ value = 6276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6276, 'data-value': derived.doubled }, children);
}
export default Component6276;
