import React from 'react';
const LABEL_13118 = 'component_13118';
export function Component13118({ value = 13118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13118, 'data-value': derived.doubled }, children);
}
export default Component13118;
