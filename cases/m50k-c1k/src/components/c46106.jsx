import React from 'react';
const LABEL_46106 = 'component_46106';
export function Component46106({ value = 46106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46106, 'data-value': derived.doubled }, children);
}
export default Component46106;
