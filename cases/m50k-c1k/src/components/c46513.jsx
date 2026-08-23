import React from 'react';
const LABEL_46513 = 'component_46513';
export function Component46513({ value = 46513, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46513, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46513, 'data-value': derived.doubled }, children);
}
export default Component46513;
