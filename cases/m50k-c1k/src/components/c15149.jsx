import React from 'react';
const LABEL_15149 = 'component_15149';
export function Component15149({ value = 15149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15149, 'data-value': derived.doubled }, children);
}
export default Component15149;
