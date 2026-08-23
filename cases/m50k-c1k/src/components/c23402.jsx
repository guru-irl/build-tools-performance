import React from 'react';
const LABEL_23402 = 'component_23402';
export function Component23402({ value = 23402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23402, 'data-value': derived.doubled }, children);
}
export default Component23402;
