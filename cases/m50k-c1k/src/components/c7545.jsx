import React from 'react';
const LABEL_7545 = 'component_7545';
export function Component7545({ value = 7545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7545, 'data-value': derived.doubled }, children);
}
export default Component7545;
