import React from 'react';
const LABEL_33409 = 'component_33409';
export function Component33409({ value = 33409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33409, 'data-value': derived.doubled }, children);
}
export default Component33409;
