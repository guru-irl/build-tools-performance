import React from 'react';
const LABEL_42372 = 'component_42372';
export function Component42372({ value = 42372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42372, 'data-value': derived.doubled }, children);
}
export default Component42372;
