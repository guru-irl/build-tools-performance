import React from 'react';
const LABEL_46118 = 'component_46118';
export function Component46118({ value = 46118, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46118, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46118, 'data-value': derived.doubled }, children);
}
export default Component46118;
