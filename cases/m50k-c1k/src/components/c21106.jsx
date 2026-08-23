import React from 'react';
const LABEL_21106 = 'component_21106';
export function Component21106({ value = 21106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21106, 'data-value': derived.doubled }, children);
}
export default Component21106;
