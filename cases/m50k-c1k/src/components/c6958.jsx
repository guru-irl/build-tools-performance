import React from 'react';
const LABEL_6958 = 'component_6958';
export function Component6958({ value = 6958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6958, 'data-value': derived.doubled }, children);
}
export default Component6958;
