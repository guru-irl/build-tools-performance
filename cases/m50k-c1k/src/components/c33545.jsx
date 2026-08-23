import React from 'react';
const LABEL_33545 = 'component_33545';
export function Component33545({ value = 33545, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33545, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33545, 'data-value': derived.doubled }, children);
}
export default Component33545;
