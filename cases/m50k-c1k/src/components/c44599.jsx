import React from 'react';
const LABEL_44599 = 'component_44599';
export function Component44599({ value = 44599, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44599, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44599, 'data-value': derived.doubled }, children);
}
export default Component44599;
