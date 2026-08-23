import React from 'react';
const LABEL_36147 = 'component_36147';
export function Component36147({ value = 36147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36147, 'data-value': derived.doubled }, children);
}
export default Component36147;
