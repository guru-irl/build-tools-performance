import React from 'react';
const LABEL_14722 = 'component_14722';
export function Component14722({ value = 14722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14722, 'data-value': derived.doubled }, children);
}
export default Component14722;
