import React from 'react';
const LABEL_638 = 'component_638';
export function Component638({ value = 638, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_638, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_638, 'data-value': derived.doubled }, children);
}
export default Component638;
