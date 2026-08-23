import React from 'react';
const LABEL_29613 = 'component_29613';
export function Component29613({ value = 29613, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29613, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29613, 'data-value': derived.doubled }, children);
}
export default Component29613;
