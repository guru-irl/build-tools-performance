import React from 'react';
const LABEL_21737 = 'component_21737';
export function Component21737({ value = 21737, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21737, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21737, 'data-value': derived.doubled }, children);
}
export default Component21737;
