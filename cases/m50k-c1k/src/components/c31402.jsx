import React from 'react';
const LABEL_31402 = 'component_31402';
export function Component31402({ value = 31402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31402, 'data-value': derived.doubled }, children);
}
export default Component31402;
