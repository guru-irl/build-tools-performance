import React from 'react';
const LABEL_46150 = 'component_46150';
export function Component46150({ value = 46150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46150, 'data-value': derived.doubled }, children);
}
export default Component46150;
