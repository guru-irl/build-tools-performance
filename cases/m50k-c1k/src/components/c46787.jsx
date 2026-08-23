import React from 'react';
const LABEL_46787 = 'component_46787';
export function Component46787({ value = 46787, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46787, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46787, 'data-value': derived.doubled }, children);
}
export default Component46787;
