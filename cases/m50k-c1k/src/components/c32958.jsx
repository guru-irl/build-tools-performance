import React from 'react';
const LABEL_32958 = 'component_32958';
export function Component32958({ value = 32958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32958, 'data-value': derived.doubled }, children);
}
export default Component32958;
