import React from 'react';
const LABEL_32336 = 'component_32336';
export function Component32336({ value = 32336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32336, 'data-value': derived.doubled }, children);
}
export default Component32336;
