import React from 'react';
const LABEL_11103 = 'component_11103';
export function Component11103({ value = 11103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11103, 'data-value': derived.doubled }, children);
}
export default Component11103;
