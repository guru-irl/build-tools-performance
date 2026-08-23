import React from 'react';
const LABEL_5958 = 'component_5958';
export function Component5958({ value = 5958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5958, 'data-value': derived.doubled }, children);
}
export default Component5958;
