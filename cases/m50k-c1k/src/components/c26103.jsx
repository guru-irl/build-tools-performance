import React from 'react';
const LABEL_26103 = 'component_26103';
export function Component26103({ value = 26103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26103, 'data-value': derived.doubled }, children);
}
export default Component26103;
