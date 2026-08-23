import React from 'react';
const LABEL_3103 = 'component_3103';
export function Component3103({ value = 3103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3103, 'data-value': derived.doubled }, children);
}
export default Component3103;
