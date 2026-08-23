import React from 'react';
const LABEL_42736 = 'component_42736';
export function Component42736({ value = 42736, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42736, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42736, 'data-value': derived.doubled }, children);
}
export default Component42736;
