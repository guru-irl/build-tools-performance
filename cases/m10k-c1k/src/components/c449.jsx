import React from 'react';
const LABEL_449 = 'component_449';
export function Component449({ value = 449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_449, 'data-value': derived.doubled }, children);
}
export default Component449;
