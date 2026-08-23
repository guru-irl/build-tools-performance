import React from 'react';
const LABEL_32276 = 'component_32276';
export function Component32276({ value = 32276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32276, 'data-value': derived.doubled }, children);
}
export default Component32276;
