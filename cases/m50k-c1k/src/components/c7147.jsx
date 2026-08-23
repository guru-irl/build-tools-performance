import React from 'react';
const LABEL_7147 = 'component_7147';
export function Component7147({ value = 7147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7147, 'data-value': derived.doubled }, children);
}
export default Component7147;
