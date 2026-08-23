import React from 'react';
const LABEL_21402 = 'component_21402';
export function Component21402({ value = 21402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21402, 'data-value': derived.doubled }, children);
}
export default Component21402;
