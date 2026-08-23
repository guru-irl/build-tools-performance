import React from 'react';
const LABEL_754 = 'component_754';
export function Component754({ value = 754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_754, 'data-value': derived.doubled }, children);
}
export default Component754;
