import React from 'react';
const LABEL_29134 = 'component_29134';
export function Component29134({ value = 29134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29134, 'data-value': derived.doubled }, children);
}
export default Component29134;
