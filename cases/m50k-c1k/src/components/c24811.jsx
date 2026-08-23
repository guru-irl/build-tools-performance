import React from 'react';
const LABEL_24811 = 'component_24811';
export function Component24811({ value = 24811, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24811, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24811, 'data-value': derived.doubled }, children);
}
export default Component24811;
