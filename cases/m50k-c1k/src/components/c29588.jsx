import React from 'react';
const LABEL_29588 = 'component_29588';
export function Component29588({ value = 29588, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29588, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29588, 'data-value': derived.doubled }, children);
}
export default Component29588;
