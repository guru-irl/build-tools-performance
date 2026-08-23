import React from 'react';
const LABEL_36106 = 'component_36106';
export function Component36106({ value = 36106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36106, 'data-value': derived.doubled }, children);
}
export default Component36106;
