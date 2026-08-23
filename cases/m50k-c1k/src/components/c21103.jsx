import React from 'react';
const LABEL_21103 = 'component_21103';
export function Component21103({ value = 21103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21103, 'data-value': derived.doubled }, children);
}
export default Component21103;
