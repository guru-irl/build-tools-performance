import React from 'react';
const LABEL_41688 = 'component_41688';
export function Component41688({ value = 41688, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41688, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41688, 'data-value': derived.doubled }, children);
}
export default Component41688;
