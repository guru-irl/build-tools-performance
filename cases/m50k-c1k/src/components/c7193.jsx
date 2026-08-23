import React from 'react';
const LABEL_7193 = 'component_7193';
export function Component7193({ value = 7193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7193, 'data-value': derived.doubled }, children);
}
export default Component7193;
