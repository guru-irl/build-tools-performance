import React from 'react';
const LABEL_36474 = 'component_36474';
export function Component36474({ value = 36474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36474, 'data-value': derived.doubled }, children);
}
export default Component36474;
