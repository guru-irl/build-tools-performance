import React from 'react';
const LABEL_46474 = 'component_46474';
export function Component46474({ value = 46474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46474, 'data-value': derived.doubled }, children);
}
export default Component46474;
