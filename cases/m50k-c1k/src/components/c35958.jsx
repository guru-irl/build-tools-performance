import React from 'react';
const LABEL_35958 = 'component_35958';
export function Component35958({ value = 35958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35958, 'data-value': derived.doubled }, children);
}
export default Component35958;
