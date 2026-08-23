import React from 'react';
const LABEL_11193 = 'component_11193';
export function Component11193({ value = 11193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11193, 'data-value': derived.doubled }, children);
}
export default Component11193;
