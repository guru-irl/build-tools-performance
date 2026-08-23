import React from 'react';
const LABEL_23103 = 'component_23103';
export function Component23103({ value = 23103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23103, 'data-value': derived.doubled }, children);
}
export default Component23103;
