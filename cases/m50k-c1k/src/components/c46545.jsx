import React from 'react';
const LABEL_46545 = 'component_46545';
export function Component46545({ value = 46545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46545, 'data-value': derived.doubled }, children);
}
export default Component46545;
