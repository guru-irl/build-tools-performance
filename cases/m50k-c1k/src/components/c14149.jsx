import React from 'react';
const LABEL_14149 = 'component_14149';
export function Component14149({ value = 14149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14149, 'data-value': derived.doubled }, children);
}
export default Component14149;
