import React from 'react';
const LABEL_5467 = 'component_5467';
export function Component5467({ value = 5467, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5467, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5467, 'data-value': derived.doubled }, children);
}
export default Component5467;
