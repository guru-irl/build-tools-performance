import React from 'react';
const LABEL_5276 = 'component_5276';
export function Component5276({ value = 5276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5276, 'data-value': derived.doubled }, children);
}
export default Component5276;
