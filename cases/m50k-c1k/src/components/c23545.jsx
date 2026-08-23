import React from 'react';
const LABEL_23545 = 'component_23545';
export function Component23545({ value = 23545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23545, 'data-value': derived.doubled }, children);
}
export default Component23545;
