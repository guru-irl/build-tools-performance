import React from 'react';
const LABEL_7106 = 'component_7106';
export function Component7106({ value = 7106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7106, 'data-value': derived.doubled }, children);
}
export default Component7106;
